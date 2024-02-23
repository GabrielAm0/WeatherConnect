using System.Globalization;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using WeatherConnect.API.Entities;
using WeatherConnect.API.Interfaces.Services;

namespace WeatherConnect.API.Services
{
	public class WeatherService : IApis
	{
		public async Task<CEP> GetCep(string cep)
		{
			using (HttpClient client = new HttpClient())
			{
				var response = await client.GetAsync($"https://viacep.com.br/ws/{cep}/json/");
				CEP json1 = JsonSerializer.Deserialize<CEP>(await response.Content.ReadAsStringAsync());

				return json1;
			}
		}

		public async Task<Cordenadas> GetCordenadas(CEP endereco)
		{
			using (HttpClient client = new HttpClient())
			{
				HttpResponseMessage response = await client.GetAsync($"https://api.opencagedata.com/geocode/v1/json?q={endereco.logradouro}+{endereco.bairro}+{endereco.localidade}+{endereco.uf}+&key=ff0e793530ac4053929bc43af63b8a0a&language=pt&pretty=1");

				var opencageResponse = JsonSerializer.Deserialize<OpencageResponse>(await response.Content.ReadAsStringAsync());

				var coordenadas = new Cordenadas
				{
				latitude = opencageResponse.results[0].geometry.lat.ToString(CultureInfo.InvariantCulture),
				longitude = opencageResponse.results[0].geometry.lng.ToString(CultureInfo.InvariantCulture)
				};

				return coordenadas;
			}
		}

		public async Task<InfClima> GetWeather(Cordenadas cordenadas)
		{
			using (HttpClient client = new HttpClient())
			{
				HttpResponseMessage response = await client.GetAsync($"https://api.openweathermap.org/data/2.5/weather?lat=-19.92083&lon=-43.93778&units=metric&lang=pt_br&appid=eb8fe453dcf001bc00344439e1ff4f67");
				
				var openWeatherResponse = JsonSerializer.Deserialize<OpenWeather>(await response.Content.ReadAsStringAsync());
				
				var infClima = new InfClima
				{
					Temperatura = openWeatherResponse.main.temp,
					Sensacao_termica = openWeatherResponse.main.feels_like,
					Temperatura_minima = openWeatherResponse.main.temp_min,
					Temperatura_maxima = openWeatherResponse.main.temp_max,
					Pressao = openWeatherResponse.main.pressure,
					Umidade = openWeatherResponse.main.humidity
				};

				return infClima;
			}
		}
	}
}