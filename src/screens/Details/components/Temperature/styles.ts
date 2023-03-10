import styled from "styled-components/native";

type TemperatureProps = {
  maxTemp?: boolean;
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MaxTemp = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.giant}px;
  color: ${(props) => props.theme.colors.white};
  margin-right: 4px;
`;

const MinTemp = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.semibold};
  font-size: ${(props) => props.theme.fontSize.xxl}px;
  color: ${(props) => props.theme.colors.gray100};
`;

const MaxDegreeSymbol = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.lg}px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 35px;
`;
const MinDegreeSymbol = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.semibold};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.gray100};
  margin-bottom: 14px;
  margin-left: 5px;
`;

export default {
  Container,
  MaxTemp,
  MinTemp,
  MaxDegreeSymbol,
  MinDegreeSymbol,
};
