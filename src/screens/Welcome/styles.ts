import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  padding: 0 16px;
`;
const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 113px;
`;
const Image = styled.Image``;
const Footer = styled.View`
  height: 108px;
`;

const HeadText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.semibold};
  font-size: ${(props) => props.theme.fontSize.xxl}px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  margin-top: 57px;
`;

const PhraseText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.gray100};
  text-align: center;
  margin-top: 33px;
  margin-bottom: 74px;
`;

const AppName = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.gray100};
`;

export default {
  Content,
  Footer,
  Container,
  Image,
  HeadText,
  PhraseText,
  AppName,
};
