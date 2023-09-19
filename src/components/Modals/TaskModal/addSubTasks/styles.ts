import { styled } from 'styled-components/native';
import { Dimensions, Appearance } from 'react-native';
import { ligthTheme } from '@/theme';

const { width } = Dimensions.get('window');

const theme = Appearance.getColorScheme();

const background = theme === "light" ? ligthTheme.addSubTask.backgroundColor : ligthTheme.addSubTask.backgroundColor

export const AddButton = styled.TouchableOpacity`
  margin-top: 15px;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: ${width * 0.11}px;
  height: ${width * 0.11}px;
  background-color: ${background};
  border-radius: 100px;
  z-index: 20;
`;

export const AddButtonImage = styled.Image`
  width: 80%;
  height: 80%;
`;
