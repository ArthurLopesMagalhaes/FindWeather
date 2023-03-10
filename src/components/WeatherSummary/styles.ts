import styled from "styled-components/native";

const Container = styled.View`
  border: 1px solid ${(props) => props.theme.colors.gray600};
  border-radius: 18px;
  padding: 10px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const VerticalDivider = styled.View`
  width: 1px;
  height: 36px;
  background-color: ${(props) => props.theme.colors.gray600};
`;

const StatsBox = styled.View`
  align-items: center;
  flex: 1;
`;

const Image = styled.Image``;

const Stats = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${(props) => props.theme.fontSize.xs}px;
  color: ${(props) => props.theme.colors.white};
`;

const Label = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.light};
  font-size: ${(props) => props.theme.fontSize.xxs}px;
  color: ${(props) => props.theme.colors.gray400};
`;

export default {
  Container,
  VerticalDivider,
  StatsBox,
  Image,
  Stats,
  Label,
};
