import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import S from "./styles";

import CloudAndThunder from "../../assets/cloud-and-thunder.png";

export const Welcome = () => {
  const navigation = useNavigation();

  function goToHome() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <S.Container>
        <S.Content>
          <S.Image source={CloudAndThunder} />
          <S.HeadText>Descubra o Clima {"\n"}na sua Cidade</S.HeadText>
          <S.PhraseText>
            Com o <S.AppName>FindWeather</S.AppName> nunca {"\n"}ficou tão fácil
            ter a previsão do {"\n"}tempo na palma da sua mão
          </S.PhraseText>
        </S.Content>
        <S.Footer>
          <Button onPress={goToHome} />
        </S.Footer>
      </S.Container>
    </Background>
  );
};
