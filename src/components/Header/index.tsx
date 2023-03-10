import S from "./styles";

import { useNavigation } from "@react-navigation/native";

import Icon, { Entypo } from "@expo/vector-icons";

type HeaderProps = {
  label: string;
  icon?: React.ReactNode;
};

export const Header = ({ label, icon }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.BackButton onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={24} color="white" />
      </S.BackButton>
      <S.TextContainer>
        {icon}
        <S.Text>{label}</S.Text>
      </S.TextContainer>
    </S.Container>
  );
};
