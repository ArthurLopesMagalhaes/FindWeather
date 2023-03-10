import { Background } from "../Background";
import S from "./styles";
import ClimateChangePng from "../../assets/climate-change.png";
import { useNavigation } from "@react-navigation/native";

export const NoLocationSelected = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <S.Container contentContainerStyle={{ alignItems: "center" }}>
        <S.AppNameFirts>
          Find<S.AppNameSecond>Weather</S.AppNameSecond>
        </S.AppNameFirts>

        <S.Image source={ClimateChangePng} />

        <S.SelectLocalContainer
          activeOpacity={0.75}
          onPress={() => navigation.navigate("Search")}
        >
          <S.SelectLocal>
            Selecione aqui um local e{"\n"} encontre o clima em tempo real
          </S.SelectLocal>
        </S.SelectLocalContainer>
      </S.Container>
    </Background>
  );
};
