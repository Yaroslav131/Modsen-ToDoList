import { styled } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const HeaderContainer = styled.View`
  margin-horizontal: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${height * 0.08}px;
`;

export const LeftButton = styled.TouchableOpacity`
  padding: 5px;
  justify-content: center;
  width: ${height * 0.04}px;
  height: ${height * 0.04}px;
  position: absolute;
  left: 0;
`;

export const ButtonImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TitleText = styled.Text`
  font-size: 28px;
  color: #fff;
  font-family: jost_semiBold;
`;
