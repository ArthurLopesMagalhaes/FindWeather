import axios from "axios";
import { IOpenWeather } from "../utils/openWeather-response";

const { OPEN_WEATHER_API_KEY } = process.env;

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const OpenWeatherAPI = {
  get5DaysForecast: (city: string, country_code: string) => {
    return api.get<IOpenWeather>(
      `forecast?appid=${OPEN_WEATHER_API_KEY}&q=${city},${country_code}&units=metric&lang=pt`
    );
  },
};
