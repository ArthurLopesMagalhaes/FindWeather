import { useCallback, useEffect, useState } from "react";
import S from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import RainingPng from "../../assets/raining.png";
import {
  IWeatherSummary,
  WeatherSummary,
} from "../../components/WeatherSummary";
import { useTheme } from "styled-components";
import CardTemperatureHour from "../../components/CardTemperatureHour";
import { Alert, FlatList } from "react-native";
import { CardTemperatureHourMock } from "../../mocks/CardTemperatureHour";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FindWeatherAPI } from "../../services/findweather-api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CITY_NAME } from "../../storage/storageConfig";
import { IHomeData } from "../../utils/HomeData.interface";
import { NoLocationSelected } from "../../components/NoLocationSelected";
import { ActivityIndicator } from "react-native";
import { ISearchResponse } from "../../utils/response";
import { ICardLocationPreview } from "../../components/CardLocationPreview";
import { formatDate } from "../../utils/formatDate";
import { forecastConditionsIcons } from "../../utils/forecastIcon";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [response, setResponse] = useState<ISearchResponse>(
    {} as ISearchResponse
  );
  const [weatherSummaryData, setWeatherSummaryData] = useState<IWeatherSummary>(
    {} as IWeatherSummary
  );

  const getCityNameFromAsyncStorage = async () => {
    const storageCity = await AsyncStorage.getItem(CITY_NAME);

    if (storageCity != null) {
      setLocation(storageCity);
    }
  };

  const handleGetForecast = async () => {
    try {
      const searchResponse = await FindWeatherAPI.getForecast(location);
      setResponse(searchResponse.data);
      setWeatherSummaryData({
        humidity: searchResponse.data.current.humidity,
        windSpeed: searchResponse.data.current.wind_kph,
        chance_of_rain:
          searchResponse.data.forecast.forecastday[0].day.daily_chance_of_rain,
      });
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getCityNameFromAsyncStorage();
    }, [])
  );

  useEffect(() => {
    handleGetForecast();
  }, [location]);

  return location === "" ? (
    <NoLocationSelected />
  ) : loading ? (
    <Loading />
  ) : (
    <Background>
      <S.Container
        contentContainerStyle={{ alignItems: "center", paddingBottom: 40 }}
      >
        <S.Header>
          <S.TextLocation>
            <Ionicons name="location-sharp" size={22} color="white" />
            {response.location.name}, {response.location.country}
          </S.TextLocation>
          <S.TextDate>{formatDate()}</S.TextDate>
        </S.Header>

        <S.Image
          source={forecastConditionsIcons(response.current?.condition.text)}
          resizeMode="contain"
        />
        <S.TemperatureContainer>
          <S.Temperature>{response.current.temp_c}</S.Temperature>
          <S.DegreeSymbol>º</S.DegreeSymbol>
        </S.TemperatureContainer>
        <S.WeatherStatus>{response.current.condition.text}</S.WeatherStatus>

        <WeatherSummary data={weatherSummaryData} />

        <S.TodayAndNextDaysContainer>
          <S.TodayText>Hoje</S.TodayText>
          <S.NextDaysTextContainer
            activeOpacity={0.75}
            onPress={() =>
              navigation.navigate("Details", {
                weatherSummary: weatherSummaryData,
              })
            }
          >
            <S.NextDaysText>Próximos 5 dias </S.NextDaysText>
            <Entypo
              name="chevron-small-right"
              size={24}
              color={theme.colors.gray100}
            />
          </S.NextDaysTextContainer>
        </S.TodayAndNextDaysContainer>

        <FlatList
          data={response.forecast.forecastday[0].hour}
          keyExtractor={(item) => item.time_epoch.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 25 }}
          renderItem={({ item }) => (
            <CardTemperatureHour
              data={{
                hour: item.time.slice(11, 16),
                image: item.condition.icon,
                temperature: item.temp_c,
              }}
            />
          )}
        />
      </S.Container>
    </Background>
  );
};
