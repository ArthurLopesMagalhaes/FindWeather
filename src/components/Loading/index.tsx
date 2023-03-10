import { ActivityIndicator } from "react-native";
import { Background } from "../Background";
import S from "./styles";

export const Loading = () => {
  return (
    <Background>
      <S.Container>
        <ActivityIndicator size="large" color="purple" />
      </S.Container>
    </Background>
  );
};
