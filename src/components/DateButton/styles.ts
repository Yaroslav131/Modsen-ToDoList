import { ligthTheme } from '@/theme';
import { StyleSheet, Appearance } from 'react-native';

const theme = Appearance.getColorScheme();

const borderColor = theme === "light" ? ligthTheme.dateButton.borderColor : ligthTheme.dateButton.borderColor
const color = theme === "light" ? ligthTheme.dateButton.color : ligthTheme.dateButton.color
const backgroundColor = theme === "light" ? ligthTheme.dateButton.backgroundColor : ligthTheme.dateButton.backgroundColor

export const styles = StyleSheet.create({
  buttonWrapper: {
    elevation: 5,
    borderColor: borderColor,
    backgroundColor: backgroundColor,
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 2,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: color,
    fontFamily: 'jost_regular',
    fontSize: 22,
  },
});
