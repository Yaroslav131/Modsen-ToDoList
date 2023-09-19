import styled from 'styled-components/native';
import { Appearance } from 'react-native';
import { ligthTheme } from '@/theme';
const theme = Appearance.getColorScheme();

const color = theme === "light" ? ligthTheme.welcomScreen.color : ligthTheme.welcomScreen.color
const sectionDescriptionColor = theme === "light" ? ligthTheme.welcomScreen.sectionDescriptionColor : ligthTheme.welcomScreen.sectionDescriptionColor
const backgroundColor = theme === "light" ? ligthTheme.welcomScreen.backgroundColor : ligthTheme.welcomScreen.backgroundColor
const buttonTextColor = theme === "light" ? ligthTheme.welcomScreen.buttonTextColor : ligthTheme.welcomScreen.buttonTextColor



export const Container = styled.View`
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const StyledImage = styled.Image`
  width: 100%;
`;

export const Content = styled.View``;

export const SectionTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 38px;
  font-family: jost_semiBold;
  color:${color};
  text-align: center;
`;

export const SectionDescription = styled.Text`
  font-size: 18px;
  font-family: jost_regular;
  margin-horizontal: 45px;
  text-align: center;
  color: ${sectionDescriptionColor};
  line-height: 20px;
`;

export const StartButton = styled.TouchableOpacity`
  background-color: ${backgroundColor};
  border-radius: 15px;
  align-items: center;
  width: 80%;
`;

export const ButtonText = styled.Text`
  color: ${buttonTextColor};
  font-size: 22px;
  font-family: Roboto;
  font-weight: bold;
  padding: 10px;
`;
