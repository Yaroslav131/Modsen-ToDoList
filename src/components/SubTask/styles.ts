import { ligthTheme } from '@/theme';
import { Dimensions, StyleSheet, Appearance } from 'react-native';

const { width } = Dimensions.get('window');

const theme = Appearance.getColorScheme();

const color = theme === "light" ? ligthTheme.subTask.color : ligthTheme.subTask.color
const borderColor = theme === "light" ? ligthTheme.subTask.borderColor : ligthTheme.subTask.borderColor

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  subTaskContainer: {
    flexDirection: 'row',
    width: '80%',
    gap: 15,
    marginLeft: 15,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'signika_light',
    color: color,
    fontSize: 18,
  },
  checkBox: {
    height: width * 0.07,
    width: width * 0.07,
    borderWidth: 2,
    borderColor: borderColor,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxImage: {
    width: '100%',
    height: '100%',
  },
  cancelButton: {
    height: width * 0.07,
    width: width * 0.07,
    borderColor: borderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
