import { ligthTheme } from '@/theme';
import { Dimensions, StyleSheet, Appearance } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const theme = Appearance.getColorScheme();

const background = theme === "light" ? ligthTheme.topicButton.backgroundColor : ligthTheme.topicButton.backgroundColor
const borderColor = theme === "light" ? ligthTheme.topicButton.borderColor : ligthTheme.topicButton.borderColor
const color = theme === "light" ? ligthTheme.topicButton.color : ligthTheme.topicButton.color


export const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'cover',
  },

  addButton: {
    backgroundColor: background,
    borderWidth: 2,
    borderColor: borderColor,
    justifyContent: 'center',
  },

  button: {
    elevation: 3,
    width: screenWidth * 0.28,
    height: screenWidth * 0.28,
    margin: screenWidth * 0.02,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: color,
    fontFamily: 'jost_regular',
    fontSize: 20,
  },
  counterText: {
    position: 'absolute',
    right: 10,
    top: 10,
    textAlign: 'right',
    color: color,
    fontFamily: 'jost_regular',
    fontSize: 20,
  },
  deleteImg: {
    width: screenWidth / 15,

    height: screenWidth / 15,
  },
});
