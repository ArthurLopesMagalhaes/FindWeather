import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  height: 54px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.gray300};
  justify-content: center;
  align-items: center;
  border-radius: 18px;
`;

const Label = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.dark300};
`;

export default {
  Container,
  Label,
};
