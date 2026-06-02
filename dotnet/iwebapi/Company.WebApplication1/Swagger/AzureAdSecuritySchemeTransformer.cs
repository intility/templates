using Microsoft.AspNetCore.OpenApi;
using Microsoft.OpenApi;

namespace Company.WebApplication1.Swagger;

public class AzureAdSecuritySchemeTransformer(IConfiguration config) : IOpenApiDocumentTransformer
{
    public Task TransformAsync(
        OpenApiDocument document,
        OpenApiDocumentTransformerContext context,
        CancellationToken cancellationToken)
    {
        var scope = $"api://{config["AzureAd:ClientId"]}/user_impersonation";

        document.Components ??= new OpenApiComponents();
        document.Components.SecuritySchemes ??= new Dictionary<string, IOpenApiSecurityScheme>();
        document.Components.SecuritySchemes["Azure AD"] = new OpenApiSecurityScheme
        {
            Type = SecuritySchemeType.OAuth2,
            Description = "`Leave client_secret blank`",
            Flows = new OpenApiOAuthFlows
            {
                AuthorizationCode = new OpenApiOAuthFlow
                {
                    AuthorizationUrl = new Uri("https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize"),
                    TokenUrl = new Uri("https://login.microsoftonline.com/organizations/oauth2/v2.0/token"),
                    Scopes = new Dictionary<string, string>
                    {
                        { scope, "Access Company.WebApplication1" }
                    }
                }
            }
        };

        var requirement = new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecuritySchemeReference("Azure AD", document),
                [scope]
            }
        };

        foreach (var operation in document.Paths.Values.SelectMany(path => path.Operations?.Values ?? Enumerable.Empty<OpenApiOperation>()))
        {
            operation.Security ??= [];
            operation.Security.Add(requirement);
        }

        return Task.CompletedTask;
    }
}
