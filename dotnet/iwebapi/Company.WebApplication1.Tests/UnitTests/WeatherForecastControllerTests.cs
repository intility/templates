using Company.WebApplication1.Controllers.V1;
using Xunit;

namespace Company.WebApplication1.Tests.UnitTests;

public class WeatherForecastControllerTests
{
    private readonly WeatherForecastController _controller;

    public WeatherForecastControllerTests()
    {
        _controller = new WeatherForecastController();
    }

    [Fact]
    public void Get_ReturnsWeatherForecast()
    {
        // Arrange & Act
        var result = _controller.Get();

        // Assert
        Assert.NotNull(result);
        Assert.Equal(5, result.Count());

        foreach (var forecast in result)
        {
            Assert.InRange(forecast.TemperatureC, -20, 55);
            Assert.Contains(forecast.Summary, WeatherForecastController.Summaries);
        }
    }
}
