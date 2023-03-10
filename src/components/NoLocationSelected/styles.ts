import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  padding: 0 16px;
`;

const AppNameFirts = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.xxl}px;
  color: ${(props) => props.theme.colors.white};
  margin-top: 50px;
`;

const AppNameSecond = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
`;

const Image = styled.Image`
  margin-top: 105px;
`;

const SelectLocal = styled.Text`
  margin-top: 105px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.gray100};
  text-align: center;
  text-decoration: underline;
`;
const SelectLocalContainer = styled.TouchableOpacity``;

export default {
  Container,
  AppNameFirts,
  AppNameSecond,
  Image,
  SelectLocalContainer,
  SelectLocal,
};
