import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
`;
const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.gray600};
  position: absolute;
  z-index: 1;
`;

const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Text = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.white};
`;

export default { Container, BackButton, Text, TextContainer };
