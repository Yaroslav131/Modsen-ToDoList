import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ButtonWrapper = styled(TouchableOpacity)`
  elevation: 5;
  border-color: #646fd4;
  background-color: #fff;
  border-width: 2px;
  border-radius: 20px;
  padding-vertical: 2px;
  width: 100px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #7d7d7d;
  font-family: jost_regular;
  font-size: 22px;
`;
