import { IWeatherSummary } from "../components/WeatherSummary";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      TabRoutes: undefined;
      Welcome: undefined;
      Home: undefined;
      Details: undefined | { weatherSummary: IWeatherSummary };
      Search: undefined;
    }
  }
}
