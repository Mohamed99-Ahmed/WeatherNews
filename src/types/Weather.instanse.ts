interface WeatherCondition {
    text: string;  // Weather condition description, e.g., "صافي"
    icon: string;  // Icon URL for the condition
    code: number;  // Weather condition code
  }
  // loacatin will passing to WeatherApiResponse
  interface Location {
    name: string;  // City name, e.g., "القاهرة"
    region: string;  // Region, e.g., "Al Qahirah"
    country: string;  // Country, e.g., "مصر"
    lat: number;  // Latitude
    lon: number;  // Longitude
    tz_id: string;  // Time zone ID, e.g., "Africa/Cairo"
    localtime_epoch: number;  // Local time as epoch
    localtime: string;  // Local time as a string
  }
  // ForecastDay will passing to WeatherApiResponse
  interface ForecastDay {
    date: string;  // Forecast date, e.g., "2024-12-24"
    day: {
      maxtemp_c: number;  // Max temperature in Celsius
      maxtemp_f: number;  // Max temperature in Fahrenheit
      mintemp_c: number;  // Min temperature in Celsius
      mintemp_f: number;  // Min temperature in Fahrenheit
      avgtemp_c: number;  // Average temperature in Celsius
      avgtemp_f: number;  // Average temperature in Fahrenheit
      maxwind_mph: number;  // Max wind speed in miles per hour
      maxwind_kph: number;  // Max wind speed in kilometers per hour
      totalprecip_mm: number;  // Total precipitation in millimeters
      totalprecip_in: number;  // Total precipitation in inches
      avgvis_km: number;  // Average visibility in kilometers
      avgvis_miles: number;  // Average visibility in miles
      avghumidity: number;  // Average humidity percentage
      condition: WeatherCondition;  // Weather condition for the day
    };
    astro: {
      sunrise: string;  // Sunrise time
      sunset: string;  // Sunset time
    };
  }
  // Weater api response that return from the api take (location, curren, forecast that have data about 3 days of weater)
 export  interface WeatherApiResponse {
    location: Location;
    current: {
      last_updated_epoch: number;
      last_updated: string;
      temp_c: number;
      temp_f: number;
      is_day: number;
      condition: WeatherCondition;
      wind_mph: number;
      wind_kph: number;
      wind_degree: number;
      wind_dir: string;
      pressure_mb: number;
      pressure_in: number;
      precip_mm: number;
      precip_in: number;
      humidity: number;
      cloud: number;
      feelslike_c: number;
      feelslike_f: number;
      windchill_c: number;
      windchill_f: number;
      heatindex_c: number;
      heatindex_f: number;
      dewpoint_c: number;
      dewpoint_f: number;
      vis_km: number;
      vis_miles: number;
      uv: number;
      gust_mph: number;
      gust_kph: number;
    };
    forecast: {
      forecastday: ForecastDay[];
    };
  }
  