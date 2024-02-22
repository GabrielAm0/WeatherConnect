using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace WeatherConnect.API.Entities
{
	public class OpenWeather
	{
		public Coord Coord { get; set; }
		public Weather[] Weather { get; set; }
		public string Base { get; set; }
		public Main main { get; set; }
		public int Visibility { get; set; }
		public Wind Wind { get; set; }
		public Rain Rain { get; set; }
		public Clouds Clouds { get; set; }
		public long Dt { get; set; }
		public Sys Sys { get; set; }
		public int Timezone { get; set; }
		public int Id { get; set; }
		public string Name { get; set; }
		public int Cod { get; set; }
	}

	public class Coord
	{
		public double Lon { get; set; }
		public double Lat { get; set; }
	}

	public class Weather
	{
		public int Id { get; set; }
		public string Main { get; set; }
		public string Description { get; set; }
		public string Icon { get; set; }
	}

	public class Main
	{
		public double Temp { get; set; }
		public double Feels_like { get; set; }
		public double Temp_min { get; set; }
		public double Temp_max { get; set; }
		public int Pressure { get; set; }
		public int Humidity { get; set; }
	}


	public class Wind
	{
		public double Speed { get; set; }
		public double Deg { get; set; }
	}

	public class Rain
	{
		[JsonPropertyName("1h")]
		public double Rain1h { get; set; }
	}

	public class Clouds
	{
		public int All { get; set; }
	}

	public class Sys
	{
		public int Type { get; set; }
		public int Id { get; set; }
		public string Country { get; set; }
		public long Sunrise { get; set; }
		public long Sunset { get; set; }
	}
}