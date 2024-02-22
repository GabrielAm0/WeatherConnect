namespace WeatherConnect.API.Entities
{
	public class InfClima
	{
		public object Temperatura { get; set; }
		public string Sencacao_termica { get; set; }
		public string Temperatura_minima { get; set; }
		public string Temperatura_maxima { get; set; }
		public string Pressao { get; set; }
		public string Humidade { get; set; }
	}
}