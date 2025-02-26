using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;
using Xunit;

namespace IntilityApi1ests.Tests.IntegrationTests;

public class WeatherForecastControllerTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;

    public WeatherForecastControllerTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task Get_ReturnsUnauthorized_WhenNoToken()
    {
        // Arrange
        var client = _factory.CreateClient();

        // Act
        var response = await client.GetAsync("/api/v1/weatherforecast");

        // Assert
        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }
}
