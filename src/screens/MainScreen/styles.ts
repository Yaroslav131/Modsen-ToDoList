import { Dimensions} from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  align-items: center;
`;

export const DateButtonContainer = styled.View`
  margin-top: 50px;
  margin-bottom: 30px;
  flex-direction: row;
  width: 90%;
  justify-content: space-evenly;
`;

export const DailyTaskText = styled.Text`
  font-family: jost_semiBold;
  color: #363636;
  font-size: 28px;
  text-align: center;
  margin-top: 40px;
`;

export const ChangeableTaskText = styled.Text`
  color: #fff;
`;

export const DateText = styled.Text`
  font-family: jost_semiBold;
  color: #363636;
  font-size: 20px;
  text-align: center;
`;

export const BottomContainer = styled.View`
  height: ${screenWidth * 0.28 * 3 + screenWidth * 0.02 * 6}px;
  align-items: center;
`;
