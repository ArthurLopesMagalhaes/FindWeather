import { ISearchResponse } from "../utils/response";
import { api } from "./api";

const { API_KEY } = process.env;

export const FindWeatherAPI = {
  getForecast: (local: string, days: number = 1) => {
    return api.get<ISearchResponse>(
      `forecast.json?key=${API_KEY}&q=${local}&days=${days}&aqi=no&alerts=no&lang=pt`
    );
  },
};
