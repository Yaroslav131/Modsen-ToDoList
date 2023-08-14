import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ButtonWrapper = styled(TouchableOpacity)`
elevation: 5;
border-color: #646fd4;
background-color: #FFF;
border-width: 2px;
border-radius: 20px;
padding-vertical: 2px;
width: 100px;
align-items: center;
`;

export const ButtonText = styled.Text`
  color: #7D7D7D;
  font-family: jost_regular;
  font-size: 22px;
`;