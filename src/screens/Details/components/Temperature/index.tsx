import S from "./styles";

type TemperatureProps = {
  maxTemp: number;
  minTemp: number;
};

type Props = {
  data: TemperatureProps;
};

export const Temperature = ({ data }: Props) => {
  return (
    <S.Container>
      <S.MaxTemp>{data.maxTemp.toFixed(0)}</S.MaxTemp>
      <S.MaxDegreeSymbol>º</S.MaxDegreeSymbol>
      <S.MinTemp> / {data.minTemp.toFixed(0)}</S.MinTemp>
      <S.MinDegreeSymbol>º</S.MinDegreeSymbol>
    </S.Container>
  );
};
