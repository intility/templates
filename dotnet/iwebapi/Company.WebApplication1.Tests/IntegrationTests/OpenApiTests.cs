using System.Net;
using System.Text.Json;
using Asp.Versioning.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using Xunit;

namespace Company.WebApplication1.Tests.IntegrationTests;

// WebApplicationFactory runs the app in the Development environment, where the
// OpenAPI documents are mapped.
public class OpenApiTests(WebApplicationFactory<Program> factory) : IClassFixture<WebApplicationFactory<Program>>
{
    [Fact]
    public void ApiVersionDescriptions_ContainV1()
    {
        // Arrange
        var provider = factory.Services.GetRequiredService<IApiVersionDescriptionProvider>();

        // Act
        var groupNames = provider.ApiVersionDescriptions.Select(d => d.GroupName);

        // Assert
        Assert.Contains("v1", groupNames);
    }

    [Fact]
    public async Task OpenApiDocument_IsServed_ForEveryApiVersion()
    {
        // Arrange
        // Swagger UI shows one endpoint for each API version description.
        // Each of these endpoints must return a document.
        var provider = factory.Services.GetRequiredService<IApiVersionDescriptionProvider>();
        var client = factory.CreateClient();

        foreach (var description in provider.ApiVersionDescriptions)
        {
            // Act
            var response = await client.GetAsync($"/openapi/{description.GroupName}.json");

            // Assert
            Assert.True(
                response.StatusCode == HttpStatusCode.OK,
                $"/openapi/{description.GroupName}.json returned {(int)response.StatusCode}");
        }
    }

    [Fact]
    public async Task OpenApiDocument_ContainsTitleAndVersion()
    {
        // Arrange
        using var document = await GetV1DocumentAsync();

        // Act
        var info = document.RootElement.GetProperty("info");

        // Assert
        Assert.Equal("Company.WebApplication1", info.GetProperty("title").GetString());
        Assert.Equal("1.0", info.GetProperty("version").GetString());
    }

    [Fact]
    public async Task OpenApiDocument_ContainsXmlComments()
    {
        // Arrange
        using var document = await GetV1DocumentAsync();

        // Act
        var operation = document.RootElement
            .GetProperty("paths")
            .GetProperty("/api/v1/WeatherForecast")
            .GetProperty("get");

        // Assert
        Assert.Equal("Retrieve weather forecast.", operation.GetProperty("summary").GetString());
        Assert.Equal(
            "Returns the weather forecast",
            operation.GetProperty("responses").GetProperty("200").GetProperty("description").GetString());
    }

    [Fact]
    public async Task OpenApiDocument_ContainsAzureAdSecurityScheme()
    {
        // Arrange
        using var document = await GetV1DocumentAsync();

        // Act
        var scheme = document.RootElement
            .GetProperty("components")
            .GetProperty("securitySchemes")
            .GetProperty("Azure AD");

        // Assert
        Assert.Equal("oauth2", scheme.GetProperty("type").GetString());
        Assert.Equal(1, document.RootElement.GetProperty("security").GetArrayLength());
    }

    [Fact]
    public async Task OpenApiDocument_NumbersAreNotTypedAsStrings()
    {
        // Arrange
        // .NET types numbers as ["integer", "string"] or ["number", "string"] when JSON
        // serialization may read them from strings. Swagger UI cannot validate such
        // schemas, so no schema in the document may combine "string" with a number type.
        using var document = await GetV1DocumentAsync();
        var violations = new List<string>();

        // Act
        CollectNumbersTypedAsStrings(document.RootElement, "$", violations);

        // Assert
        Assert.True(
            violations.Count == 0,
            $"Schemas that type numbers as strings: {string.Join(", ", violations)}");
    }

    private async Task<JsonDocument> GetV1DocumentAsync()
    {
        var client = factory.CreateClient();
        var response = await client.GetAsync("/openapi/v1.json");
        response.EnsureSuccessStatusCode();
        return JsonDocument.Parse(await response.Content.ReadAsStringAsync());
    }

    // Walks the whole document, including paths and components, because every number
    // parameter, request body, and response schema must be usable in Swagger UI.
    private static void CollectNumbersTypedAsStrings(JsonElement element, string path, List<string> violations)
    {
        switch (element.ValueKind)
        {
            case JsonValueKind.Object:
                if (element.TryGetProperty("type", out var type) && type.ValueKind == JsonValueKind.Array)
                {
                    var typeNames = type.EnumerateArray().Select(t => t.GetString()).ToHashSet();

                    if (typeNames.Contains("string")
                        && (typeNames.Contains("integer") || typeNames.Contains("number")))
                    {
                        violations.Add(path);
                    }
                }

                foreach (var property in element.EnumerateObject())
                {
                    CollectNumbersTypedAsStrings(property.Value, $"{path}.{property.Name}", violations);
                }

                break;

            case JsonValueKind.Array:
                var index = 0;

                foreach (var item in element.EnumerateArray())
                {
                    CollectNumbersTypedAsStrings(item, $"{path}[{index}]", violations);
                    index++;
                }

                break;
        }
    }
}
