import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Entypo } from "@expo/vector-icons";

import S from "./styles";

import ImagePng from "../../assets/icy-fog.png";

import {
  IWeatherSummary,
  WeatherSummary,
} from "../../components/WeatherSummary";
import { Temperature } from "./components/Temperature";
import { DayRow } from "./components/DayRow";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { OpenWeatherAPI } from "../../services/openweather-api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CITY_NAME, COUNTRY_CODE } from "../../storage/storageConfig";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { IOpenWeather } from "../../utils/openWeather-response";
import { Loading } from "../../components/Loading";

type City = {
  city: string;
  country_code: string;
};

type RouteParams = {
  weatherSummary: IWeatherSummary;
};

export const Details = () => {
  const theme = useTheme();
  const route = useRoute();
  const { weatherSummary } = route.params as RouteParams;

  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState<City>({ city: "", country_code: "" });
  const [forecast5Days, setForecast5Days] = useState<IOpenWeather>();

  const getCityfromAsyncStorage = async () => {
    const storageCity = await AsyncStorage.multiGet([CITY_NAME, COUNTRY_CODE]);

    if (storageCity[0][1] !== null && storageCity[1][1] !== null) {
      setCity({
        city: storageCity[0][1],
        country_code: storageCity[1][1],
      });
    }
  };

  const handleApiCall = async () => {
    try {
      const response = await OpenWeatherAPI.get5DaysForecast("vicosa", "br");
      setForecast5Days(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getCityfromAsyncStorage();
    }, [])
  );

  useEffect(() => {
    handleApiCall();
  }, []);

  return (
    <Background>
      {loading ? (
        <Loading />
      ) : (
        <>
          <StatusBar backgroundColor={theme.colors.dark400} style="light" />
          <S.TopView>
            <Header
              label="Próximos 5 dias"
              icon={
                <Entypo
                  name="calendar"
                  size={22}
                  color="white"
                  style={{ marginRight: 6 }}
                />
              }
            />
            <S.TopInfo>
              <S.TopInfoLeft>
                <S.Image source={ImagePng} resizeMode="contain" />
              </S.TopInfoLeft>
              <S.TopInfoRight>
                <S.DayAndWeatherText>Amanhã</S.DayAndWeatherText>
                <Temperature
                  data={{
                    maxTemp: forecast5Days!.list[0].main.temp_max,
                    minTemp: forecast5Days!.list[0].main.temp_min,
                  }}
                />
                <S.DayAndWeatherText>
                  {forecast5Days?.list[0].weather[0].description}
                </S.DayAndWeatherText>
              </S.TopInfoRight>
            </S.TopInfo>

            <WeatherSummary data={weatherSummary} />
          </S.TopView>

          <S.DaysTable contentContainerStyle={{ paddingBottom: 60 }}>
            <DayRow />
            <DayRow />
            <DayRow />
            <DayRow />
            <DayRow />
            <DayRow />
            <DayRow />
            <DayRow />
            <DayRow />
          </S.DaysTable>
        </>
      )}
    </Background>
  );
};
