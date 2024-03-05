using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeatherConnect.API.Entities;

namespace WeatherConnect.API.Interfaces.Services
{
	public interface IApis
	{
		Task<CEP> GetCep(string cep);
		Task<Cordenadas> GetCordenadas(CEP endereco);
		Task<InfClima> GetWeather(Cordenadas cordenadas);
	}
}