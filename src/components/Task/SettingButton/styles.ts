import { ligthTheme } from '@/theme';
import { StyleSheet, Appearance } from 'react-native';

const theme = Appearance.getColorScheme();

const color = theme === "light" ? ligthTheme.searchTask.color : ligthTheme.searchTask.color

export const styles = StyleSheet.create({
  settingButtonWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
  },
  settingButtonText: {
    fontFamily: 'signika_light',
    color: color,
    fontSize: 18,
  },
});
