import S from "./styles";

import Img from "../../../../assets/drop-miniature.png";

export const DayRow = () => {
  return (
    <S.Container>
      <S.Date>
        <S.WeekDay>Seg </S.WeekDay>Jan, 02
      </S.Date>
      <S.WeatherContainer>
        <S.WeatherImg source={Img} />
        <S.WeatherText>Nevoeiro</S.WeatherText>
      </S.WeatherContainer>

      <S.TemperatureContainer>
        <S.MaxTemp>3º</S.MaxTemp>
        <S.MinTemp>/ 17º</S.MinTemp>
      </S.TemperatureContainer>
    </S.Container>
  );
};
