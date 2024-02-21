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
		public async Task<string> Get(string cep)
		{
			CEP getCep = await _apiService.GetCep(cep);
			Cordenadas getCordenadas = await _apiService.GetCordenadas(getCep);
			InfClima getWeather = await _apiService.GetWeather(getCordenadas);

			return getWeather;
		}
	}
}