import { TouchableOpacityProps } from "react-native";
import S from "./styles";

type ButtonProps = TouchableOpacityProps & {};

export const Button = ({ ...rest }: TouchableOpacityProps) => {
  return (
    <S.Container activeOpacity={0.5} {...rest}>
      <S.Label>Iniciar</S.Label>
    </S.Container>
  );
};
