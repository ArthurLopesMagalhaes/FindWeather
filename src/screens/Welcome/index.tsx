import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import S from "./styles";

import CloudAndThunder from "../../assets/cloud-and-thunder.png";

export const Welcome = () => {
  return (
    <Background>
      <S.Container>
        <S.Content>
          <S.Image source={CloudAndThunder} />
          <S.HeadText>Descubra o Clima {"\n"}na sua Cidade</S.HeadText>
          <S.PhraseText>
            Com o <S.BrandName>FindWeather</S.BrandName> nunca {"\n"}ficou tão
            fácil ter a previsão do {"\n"}tempo na palma da sua mão
          </S.PhraseText>
        </S.Content>
        <S.Footer>
          <Button />
        </S.Footer>
      </S.Container>
    </Background>
  );
};
