using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;
using Company.WebApplication1.Swagger;
using Microsoft.Extensions.Options;
using Serilog;
using Swashbuckle.AspNetCore.SwaggerUI;
using Intility.Extensions.Logging;
using Intility.Authorization.Azure.GuestPolicies;
using Azure.Identity;

var builder = WebApplication.CreateBuilder(args);

var endpoint = builder.Configuration["AppConfig"];
if (!string.IsNullOrEmpty(endpoint))
{
    builder.Configuration.AddAzureAppConfiguration(builder =>
    {
        var creds = new DefaultAzureCredential(includeInteractiveCredentials: false);
        // connect to external configuration
        builder.Connect(new Uri(endpoint), creds)
            // enable keyvault linked items
            .ConfigureKeyVault(options => options.SetCredential(creds))
            // enable automatic settings refresh
            .ConfigureRefresh(options => options
                .Register("*", refreshAll: true)
                .SetRefreshInterval(TimeSpan.FromSeconds(5)));
    }, optional: true);
}

builder.Host.UseIntilityLogging((ctx, logging) =>
{
    logging.UseDefaultEnrichers()
        .UseElasticsearch()
        .UseSentry();

    if (builder.Configuration.GetValue<bool>("EnableOpenShiftLogging"))
    {
        logging.UseOpenshiftLogging();
    }
});

// Add services to the container.
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

builder.Services.AddDenyGuestsAuthorization();
builder.Services.AddAuthorizationBuilder()
    .SetDefaultPolicy(new AuthorizationPolicyBuilder()
        .RequireAuthenticatedUser()
        .DenyGuests()
        .Build());

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(builder =>
        builder.WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader()
        )
);

builder.Services.AddHealthChecks();
builder.Services.AddProblemDetails();
builder.Services.AddControllers();

builder.Services.AddApiVersioning(options =>
{
    options.ReportApiVersions = true;
    // The API version is read only from the URL segment, for example /api/v1/...
    options.ApiVersionReader = new UrlSegmentApiVersionReader();
})
.AddMvc()
.AddApiExplorer(options =>
{
    // note: the specified format code will format the version as "'v'major[.minor][-status]"
    options.GroupNameFormat = "'v'VVV";

    // note: this option is only necessary when versioning by url segment. the SubstitutionFormat
    // can also be used to control the format of the API version in route templates
    options.SubstituteApiVersionInUrl = true;
})
// Generate one OpenAPI document for each API version, for example /openapi/v1.json.
.AddOpenApi(options =>
{
    options.Document.AddDocumentTransformer<AzureAdSecuritySchemeTransformer>();
    options.Document.AddDocumentTransformer((document, context, cancellationToken) =>
    {
        document.Info.Title = "Company.WebApplication1";
        return Task.CompletedTask;
    });
});

// Swagger UI is used purely as a frontend for the OpenAPI documents generated above.
builder.Services.AddTransient<IConfigureOptions<SwaggerUIOptions>, SwaggerUIConfigurator>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.MapOpenApi().WithDocumentPerVersion();
    app.UseSwaggerUI();
}

app.UseSerilogRequestLogging();
app.UseCors();

app.UseStatusCodePages();
app.UseExceptionHandler();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers().RequireAuthorization();
app.MapHealthChecks("/health");

app.Run();

// Used for integration tests, https://github.com/dotnet/AspNetCore.Docs/issues/26670
public partial class Program { }
