import { Dimensions, Image, TextInput } from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  align-items: center;
`;

export const DateButtonContainer = styled.View`
  margin-top: 60px;
  margin-bottom: 30px;
  flex-direction: row;
  width: 90%;
  justify-content: space-evenly;
`;

export const SearchContainer = styled.View`
  margin-top: 20px;
  border-radius: 15px;
  padding-vertical: 5px;
  padding-horizontal: 15px;
  flex-direction: row;
  width: 80%;
  background-color: #fff;
  gap: 5px;
  elevation: 30;
`;

export const SearchImage = styled.Image`
  align-self: center;
  flex: 1;
  min-height: 30px;
`;

export const SearchInput = styled.TextInput`
  font-family: jost_regular;
  color: #363636;
  flex: 9;
  width: 100%;
  font-size: 24px;
`;

export const DailyTaskText = styled.Text`
  font-family: jost_semiBold;
  color: #363636;
  font-size: 28px;
  text-align: center;
  margin-top: 100px;
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
  height: ${screenWidth * 0.28 * 3 + screenWidth * 0.02 * 5}px;
  align-items: center;
`;