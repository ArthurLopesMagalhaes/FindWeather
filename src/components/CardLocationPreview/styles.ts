import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.dark300};
  border: 1px solid ${(props) => props.theme.colors.dark100};
  padding: 17px 12px;
  width: 155px;
  margin-top: 42px;
`;

const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Icon = styled.Image`
  width: 40px;
`;

const Weather = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  color: ${(props) => props.theme.colors.gray100};
`;

const Temp = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.lg}px;
  color: ${(props) => props.theme.colors.white};
`;

const Bottom = styled.View``;

const Location = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.semibold};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  color: ${(props) => props.theme.colors.white};
  margin-top: 18px;
`;

export default {
  Container,
  Top,
  Icon,
  Bottom,
  Weather,
  Location,
  Temp,
};
