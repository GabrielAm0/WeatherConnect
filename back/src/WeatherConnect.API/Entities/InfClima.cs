﻿namespace WeatherConnect.API.Entities
{
	public class InfClima
	{
		public object Temperatura { get; set; }
		public double Sensacao_termica { get; set; }
		public double Temperatura_minima { get; set; }
		public double Temperatura_maxima { get; set; }
		public int Pressao { get; set; }
		public int Umidade { get; set; }
		public string Descricao { get; set; }
	}
}