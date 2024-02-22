using System;
using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using WeatherConnect.API.Entities;
using WeatherConnect.API.Interfaces.Services;

namespace WeatherConnect.API.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class WeatherConnectController : ControllerBase
	{
		private readonly IApis _apiService;

		public WeatherConnectController(IApis apiService)
		{
			_apiService = apiService;
		}

		[HttpGet("{cep}")]
		public async Task<OpenWeather> Get(string cep)
		{
			CEP getCep = await _apiService.GetCep(cep);
			using (HttpClient client = new HttpClient())
			{
				Cordenadas getCordenadas = await _apiService.GetCordenadas(getCep);
				HttpResponseMessage response =
				await client.GetAsync($"https://api.openweathermap.org/data/2.5/weather?lat=-19.92083&lon=-43.93778&units=metric&lang=pt_br&appid=eb8fe453dcf001bc00344439e1ff4f67");
				var openWeatherResponse = JsonSerializer.Deserialize<OpenWeather>(await response.Content.ReadAsStringAsync());
				return openWeatherResponse;
			}
		}
	}
}