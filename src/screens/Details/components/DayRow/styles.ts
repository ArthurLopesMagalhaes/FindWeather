import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Date = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.gray100};
`;

const WeekDay = styled.Text`
  color: ${(props) => props.theme.colors.white};
`;

const WeatherContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const WeatherImg = styled.Image`
  margin-right: 4px;
`;

const WeatherText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.gray100};
`;

const TemperatureContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MaxTemp = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.white};
  margin-right: 4px;
`;

const MinTemp = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.gray100};
`;

export default {
  Container,
  Date,
  WeekDay,
  WeatherContainer,
  WeatherImg,
  WeatherText,
  TemperatureContainer,
  MaxTemp,
  MinTemp,
};
