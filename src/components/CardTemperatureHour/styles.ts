import styled from "styled-components/native";

const Container = styled.View`
  border: 1px solid ${(props) => props.theme.colors.dark100};
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 75px;
  background-color: ${(props) => props.theme.colors.dark300};
  align-items: center;
  margin-right: 18px;
`;

const Temperature = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.sm}px;
  color: ${(props) => props.theme.colors.white};
`;

const Image = styled.Image`
  margin-top: 8px;
  margin-bottom: 9px;
  width: 30px;
  height: 30px;
`;

const Hour = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.xxxs}px;
  color: ${(props) => props.theme.colors.gray100};
`;

export default { Container, Temperature, Image, Hour };
