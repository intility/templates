using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;
using Xunit;

namespace Company.WebApplication1.Tests.IntegrationTests;

public class WeatherForecastControllerTests(WebApplicationFactory<Program> factory) : IClassFixture<WebApplicationFactory<Program>>
{

    [Fact]
    public async Task Get_ReturnsUnauthorized_WhenNoToken()
    {
        // Arrange
        var client = factory.CreateClient();

        // Act
        var response = await client.GetAsync("/api/v1/weatherforecast");

        // Assert
        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }
}
