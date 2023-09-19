import { styled } from 'styled-components/native';
import { Text, View, Appearance, TouchableOpacity } from 'react-native';
import { ligthTheme } from '@/theme';

const theme = Appearance.getColorScheme();

const background = theme === "light" ? ligthTheme.createtaskModal.backgroundColor : ligthTheme.createtaskModal.backgroundColor
const color = theme === "light" ? ligthTheme.createtaskModal.color : ligthTheme.createtaskModal.color
const buttonTextColor = theme === "light" ? ligthTheme.createtaskModal.buttonTextColor : ligthTheme.createtaskModal.buttonTextColor


export const TitleText = styled(Text)`
  font-size: 22px;
  font-family: 'signika_regular';
  color:${color};
`;

export const TextInput = styled.TextInput`
  font-family: jost_regular;
  color: ${color};
  width: 100%;
  font-size: 20px;
  border-bottom-width: 1px;
  border-color: gray;
  border-radius: 5px;
`;

export const ButtonContainer = styled(View)`
  margin-top: 30px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CustomButton = styled(TouchableOpacity)`
  border-radius: 5px;
  background-color: ${background};
  padding-horizontal: 15px;
  padding-vertical: 5px;
`;

export const ButtonText = styled(Text)`
  font-size: 20px;
  font-family: 'Roboto';
  color:${buttonTextColor};
`;

export const ContentContainer = styled(View)`
  background-color: ${background};
  padding-horizontal: 30px;
  padding-vertical: 20px;
  border-radius: 20px;
  align-items: flex-start;
  align-self: center;
  width: 80%;
  elevation: 25;
`;
