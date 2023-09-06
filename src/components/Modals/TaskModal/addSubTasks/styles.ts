import { styled } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const AddButton = styled.TouchableOpacity`
  margin-top: 15px;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: ${width * 0.11}px;
  height: ${width * 0.11}px;
  background-color: #646fd4;
  border-radius: 100px;
  z-index: 20;
`;

export const AddButtonImage = styled.Image`
  width: 80%;
  height: 80%;
`;
