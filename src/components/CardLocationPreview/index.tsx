import { ImageSourcePropType } from "react-native";
import S from "./styles";

export type ICardLocationPreview = {
  temp_c: number;
  icon: string;
  weather: string;
  location: string;
};

type Props = {
  data: ICardLocationPreview;
  cardPress: () => void;
};

export const CardLocationPreview = ({ data, cardPress }: Props) => {
  return (
    <S.Container activeOpacity={0.75} onPress={cardPress}>
      <S.Top>
        <S.Temp>{data.temp_c}º</S.Temp>
        <S.Icon
          source={{
            uri: `https:${data.icon}`,
          }}
          resizeMode="contain"
        />
      </S.Top>
      <S.Weather>{data.weather}</S.Weather>
      <S.Bottom>
        <S.Location>{data.location}</S.Location>
      </S.Bottom>
    </S.Container>
  );
};
