using Asp.Versioning.ApiExplorer;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerUI;

namespace Company.WebApplication1.Swagger;

public class SwaggerUIConfigurator(IApiVersionDescriptionProvider apiVersionProvider, IConfiguration config) : IConfigureOptions<SwaggerUIOptions>
{
    public void Configure(SwaggerUIOptions options)
    {
        foreach (var description in apiVersionProvider.ApiVersionDescriptions)
        {
            options.SwaggerEndpoint(
                $"/openapi/{description.GroupName}.json",
                $"Company.WebApplication1 {description.ApiVersion}"
            );
        }
        options.OAuthAppName(config["Swagger:AppName"]);
        options.OAuthClientId(config["Swagger:ClientId"]);
        options.OAuthScopes($"api://{config["AzureAd:ClientId"]}/user_impersonation");
        options.OAuthUsePkce();
        options.RoutePrefix = string.Empty;
    }
}
