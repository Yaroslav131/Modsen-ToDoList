import { ligthTheme } from '@/theme';
import { Dimensions, Appearance, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const theme = Appearance.getColorScheme();

const color = theme === "light" ? ligthTheme.addNameDescriptionImportant.color : ligthTheme.addNameDescriptionImportant.color
const borderColor = theme === "light" ? ligthTheme.addNameDescriptionImportant.borderColor : ligthTheme.addNameDescriptionImportant.borderColor


export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
  },
  nameInputContainer: {
    flex: 9,
  },
  checkBox: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 2,
  },
  checkBoxImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  titleText: {
    fontSize: 22,
    fontFamily: 'signika_regular',
    color: color,
  },
  textInput: {
    fontFamily: 'jost_regular',
    color: color,
    width: '100%',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: borderColor,
    borderRadius: 5,
  },
});