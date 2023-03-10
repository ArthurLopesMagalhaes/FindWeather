import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import S from "./styles";

import NotFoundPng from "../../assets/not-found-destination.png";
import { useState } from "react";
import {
  CardLocationPreview,
  ICardLocationPreview,
} from "../../components/CardLocationPreview";
import { ISearchResponse } from "../../utils/response";
import { FindWeatherAPI } from "../../services/findweather-api";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { CITY_NAME, COUNTRY_CODE } from "../../storage/storageConfig";
import { useNavigation } from "@react-navigation/native";
import { GeoCodingAPI } from "../../services/geocoding-api";

export const Search = () => {
  const navigation = useNavigation();

  const [local, setLocal] = useState("");
  const [cardData, setCardData] = useState<ICardLocationPreview | null>(
    {} as ICardLocationPreview
  );

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGetForecast = async () => {
    try {
      setLoading(true);
      const searchResponse = await FindWeatherAPI.getForecast(local);

      if (searchResponse.status === 400) {
        return new Error();
      }
      setCardData({
        icon: searchResponse.data.current.condition.icon,
        location: searchResponse.data.location.region,
        temp_c: searchResponse.data.current.temp_c,
        weather: searchResponse.data.current.condition.text,
      });

      const geoCodingRes = await GeoCodingAPI.getCountryCode("Brazil");
      console.log();

      await AsyncStorage.setItem(
        COUNTRY_CODE,
        geoCodingRes.data.results[0].components.country_code
      );

      await AsyncStorage.setItem(CITY_NAME, searchResponse.data.location.name);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background>
      <S.Container contentContainerStyle={{ paddingVertical: 40 }}>
        <Header label="Busca" />
        <Input
          onChangeText={(text) => {
            setLocal(text);
            setError(false);
            setCardData(null);
          }}
          onMarkerPress={handleGetForecast}
          onEndEditing={handleGetForecast}
        />
        {error && (
          <S.NotFoundContainer>
            <S.Image source={NotFoundPng} />
            <S.NotFoundTitle>OPS!</S.NotFoundTitle>
            <S.NotFoundPhrase>
              Não foi possível encontrar o local desejado!
            </S.NotFoundPhrase>
          </S.NotFoundContainer>
        )}
        {cardData?.location && (
          <CardLocationPreview
            data={cardData}
            cardPress={() => navigation.navigate("Home")}
          />
        )}
      </S.Container>
    </Background>
  );
};
