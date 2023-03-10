import styled from "styled-components/native";

const TopView = styled.View`
  padding: 40px 16px 36px;
  border-bottom-left-radius: 53px;
  border-bottom-right-radius: 53px;
  background-color: ${(props) => props.theme.colors.dark400};
`;

const TopInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const TopInfoLeft = styled.View`
  justify-content: center;
  align-items: center;
`;
const Image = styled.Image`
  width: 130px;
  height: 130px;
`;

const TopInfoRight = styled.View`
  align-items: flex-start;
  flex: 1;
  margin-left: 30px;
`;

const DayAndWeatherText = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSize.md}px;
  color: ${(props) => props.theme.colors.gray100};
`;

const DaysTable = styled.ScrollView`
  padding: 35px 16px;
`;

export default {
  TopView,
  TopInfo,
  TopInfoLeft,
  Image,
  TopInfoRight,
  DayAndWeatherText,
  DaysTable,
};
