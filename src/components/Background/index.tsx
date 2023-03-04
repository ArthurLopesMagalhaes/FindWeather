import S from "./styles";

type BackgroundProps = {
  children?: React.ReactNode;
};

export const Background = ({ children }: BackgroundProps) => {
  return <S.Container>{children}</S.Container>;
};
