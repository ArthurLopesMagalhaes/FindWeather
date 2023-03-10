import { IWeatherSummary } from "../components/WeatherSummary";
import { Hour, ICurrent } from "./response";

export type IHomeData = {
  current: ICurrent;
  cityName: string;
  temp_c: number;
  weather: string;
  weatherSummary: IWeatherSummary;
  forecast: {
    hour: Hour[];
  };
};
