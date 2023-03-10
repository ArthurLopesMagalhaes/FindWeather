import { ImageSourcePropType } from "react-native";
import S from "./styles";
import { memo } from "react";

import DropMiniaturePng from "../../assets/drop-miniature.png";

export type CardTemperatureHourProps = {
  temperature: number;
  image: string;
  hour: string;
};

type Props = {
  data: CardTemperatureHourProps;
};

const CardTemperatureHour = ({ data }: Props) => {
  return (
    <S.Container>
      <S.Temperature>{data.temperature}º</S.Temperature>
      <S.Image source={{ uri: `http:${data.image}` }} />
      <S.Hour>{data?.hour}</S.Hour>
    </S.Container>
  );
};

export default memo(CardTemperatureHour);
