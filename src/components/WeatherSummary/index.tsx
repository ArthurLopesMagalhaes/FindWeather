import S from "./styles";

import DropMiniaturePng from "../../assets/drop-miniature.png";
import RainingCloudMiniaturePng from "../../assets/raining-cloud-miniature.png";
import WindMiniaturePng from "../../assets/wind-miniature.png";

export type IWeatherSummary = {
  humidity: number;
  windSpeed: number;
  chance_of_rain: number;
};

type Props = {
  data: IWeatherSummary;
};

export const WeatherSummary = ({ data }: Props) => {
  return (
    <S.Container>
      <S.StatsBox>
        <S.Image source={DropMiniaturePng} />
        <S.Stats>{data?.humidity}%</S.Stats>
        <S.Label>Umidade</S.Label>
      </S.StatsBox>
      <S.VerticalDivider />
      <S.StatsBox>
        <S.Image source={WindMiniaturePng} />
        <S.Stats>{data?.windSpeed}km/h</S.Stats>
        <S.Label>Veloc. Vento</S.Label>
      </S.StatsBox>
      <S.VerticalDivider />
      <S.StatsBox>
        <S.Image source={RainingCloudMiniaturePng} />
        <S.Stats>24%</S.Stats>
        <S.Label>Chuva</S.Label>
      </S.StatsBox>
    </S.Container>
  );
};
