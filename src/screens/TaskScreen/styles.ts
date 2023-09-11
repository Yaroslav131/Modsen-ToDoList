import { Dimensions, StyleSheet, Appearance } from 'react-native';
import { ligthTheme } from '@/theme';

const theme = Appearance.getColorScheme();

const background = theme === "light" ? ligthTheme.taskScreen.backgroundColor : ligthTheme.taskScreen.backgroundColor
const color = theme === "light" ? ligthTheme.taskScreen.color : ligthTheme.taskScreen.color
const doneTaskTongTextColor = theme === "light" ? ligthTheme.taskScreen.doneTaskTongTextColor : ligthTheme.taskScreen.doneTaskTongTextColor
const borderBottomColor = theme === "light" ? ligthTheme.taskScreen.borderBottomColor : ligthTheme.taskScreen.borderBottomColor

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  buttonImage: {
    resizeMode: 'stretch',
  },
  titleText: {
    fontSize: 28,
    color: color,
    fontFamily: 'jost_semiBold',
  },
  backButton: {
    justifyContent: 'center',
    width: height * 0.03,
    height: height * 0.03,
    position: 'absolute',
    left: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.09,
  },
  scrollContainer: {
    flex: 5,
  },

  container: {
    width: '100%',
    height: height * 0.9,
    alignSelf: 'center',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.14,
    height: width * 0.14,
    backgroundColor: background,
    borderRadius: 100,
    zIndex: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonImage: {
    width: '80%',
    height: '80%',
  },
  doneTaskTongText: {
    fontSize: 18,
    color: doneTaskTongTextColor,
    fontFamily: 'jost_regular',
  },
  doneTaskTongleContainer: {
    paddingHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  horizontalLine: {
    borderBottomWidth: 2,
    borderBottomColor: borderBottomColor,
    marginVertical: 10,
  },

  separatContainer:
  {
    width: '90%',
    alignSelf: 'center',
  },
});
