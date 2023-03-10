import S from "./styles";
import { useTheme } from "styled-components";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { TextInputProps } from "react-native";

type Props = TextInputProps & {
  onMarkerPress: () => void;
};

export const Input = ({ onMarkerPress, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <S.Container>
        <Ionicons
          name="ios-search-outline"
          size={22}
          color={theme.colors.white}
        />
        <S.Input {...rest} />
      </S.Container>
      <S.MarkerContainer onPress={onMarkerPress} activeOpacity={0.7}>
        <MaterialCommunityIcons name="map-marker" size={42} color="white" />
      </S.MarkerContainer>
    </S.Wrapper>
  );
};
