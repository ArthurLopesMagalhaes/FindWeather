import styled from "styled-components/native";
import { TextInputProps, TouchableOpacityProps } from "react-native";

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
`;

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.dark400};
  flex-direction: row;
  align-items: center;
  border-radius: 11px;
  padding: 16px 11px;
  flex: 1;
`;

const Input = styled.TextInput.attrs((props) => ({
  placeholder: "Digite o nome de uma cidade",
  placeholderTextColor: props.theme.colors.gray200,
}))<TouchableOpacityProps>`
  margin-left: 16px;
  flex: 1;
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.white};
`;

const MarkerContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.dark400};
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  height: 59px;
  width: 59px;
  margin-left: 16px;
`;
export default { Wrapper, Container, Input, MarkerContainer };
