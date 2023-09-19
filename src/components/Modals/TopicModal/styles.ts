import { ligthTheme } from '@/theme';
import { StyleSheet, Appearance } from 'react-native';

const theme = Appearance.getColorScheme();

const color = theme === "light" ? ligthTheme.topicModal.textColor : ligthTheme.topicModal.textColor
const buttonTextColor = theme === "light" ? ligthTheme.topicModal.buttonTextColor : ligthTheme.topicModal.buttonTextColor
const backgroundColor = theme === "light" ? ligthTheme.topicModal.backgroundColor : ligthTheme.topicModal.backgroundColor
const borderColor = theme === "light" ? ligthTheme.topicModal.borderColor : ligthTheme.topicModal.borderColor

export const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'flex-start',
    alignSelf: 'center',
    width: '80%',
    elevation: 25,
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
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  customButton: {
    borderRadius: 5,
    backgroundColor: backgroundColor,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: buttonTextColor,
  },
});