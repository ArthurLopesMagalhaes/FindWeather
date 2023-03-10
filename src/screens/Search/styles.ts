import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`;

const NotFoundContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;

const Image = styled.Image``;

const NotFoundTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.semibold};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.gray100};
  margin-top: 40px;
`;
const NotFoundPhrase = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.semibold};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.gray100};
  margin-top: 18px;
`;

export default {
  Container,
  NotFoundContainer,
  Image,
  NotFoundTitle,
  NotFoundPhrase,
};
