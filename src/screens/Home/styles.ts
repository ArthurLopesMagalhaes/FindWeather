import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  padding: 0 16px;
`;

const Header = styled.View`
  margin-bottom: 43px;
`;

const TextLocation = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  color: ${(props) => props.theme.colors.white};
  margin-top: 50px;
  max-width: 80%;
  text-align: center;
`;

const TextDate = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.gray100};
  margin-left: 22px;
  margin-top: -5px;
  text-align: center;
`;

const Image = styled.Image`
  width: 172px;
  height: 140px;
`;

const TemperatureContainer = styled.View`
  flex-direction: row;
`;

const Temperature = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.giant}px;
  color: ${(props) => props.theme.colors.white};
`;
const DegreeSymbol = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.lg}px;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 15px;
  right: -15px;
`;

const WeatherStatus = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.lg}px;
  color: ${(props) => props.theme.colors.gray100};
  margin-bottom: 45px;
  text-align: center;
`;

const TodayAndNextDaysContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const TodayText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.white};
`;

const NextDaysTextContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const NextDaysText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.semibold};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.gray100};
`;

export default {
  Container,
  Header,
  TextLocation,
  TextDate,
  Image,
  TemperatureContainer,
  Temperature,
  DegreeSymbol,
  WeatherStatus,
  TodayAndNextDaysContainer,
  TodayText,
  NextDaysTextContainer,
  NextDaysText,
};
