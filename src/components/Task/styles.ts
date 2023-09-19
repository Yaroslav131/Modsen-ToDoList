import { ligthTheme } from '@/theme';
import { StyleSheet, Dimensions, Appearance } from 'react-native';

export const { width } = Dimensions.get('window');

const theme = Appearance.getColorScheme();

const displaySubTasksColor = theme === "light" ? ligthTheme.task.displaySubTasksColor : ligthTheme.task.displaySubTasksColor
const noDisplaySubTasksColor = theme === "light" ? ligthTheme.task.noDisplaySubTasksColor : ligthTheme.task.noDisplaySubTasksColor
const backgroundColor = theme === "light" ? ligthTheme.task.backgroundColor : ligthTheme.task.backgroundColor
const timeTextColor = theme === "light" ? ligthTheme.task.timeTextColor : ligthTheme.task.timeTextColor
const borderColor = theme === "light" ? ligthTheme.task.borderColor : ligthTheme.task.borderColor
const color = theme === "light" ? ligthTheme.task.color : ligthTheme.task.color

export const dynamicTextStyles = (isDisplaySubTasks: boolean) => ({
  descriptionText: {
    fontFamily: 'signika_light',
    color: isDisplaySubTasks ? displaySubTasksColor : noDisplaySubTasksColor,
    fontSize: isDisplaySubTasks ? 18 : 14,
  },
});

export const styles = StyleSheet.create({
  settingContainer: {
    position: 'absolute',

    zIndex: 20,
    backgroundColor: backgroundColor,
    borderRadius: 20,
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 'auto',
    right: 40,
    padding: 15,
  },
  container: {
    width: '90%',
    backgroundColor: backgroundColor,
    borderRadius: 20,
    elevation: 2,
    margin: 10,
    alignSelf: 'center',
  },
  mainContantContainer: {
    padding: 16,
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontFamily: 'signika_light',
    color: timeTextColor,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  checkBox: {
    height: width * 0.08,
    width: width * 0.08,
    borderWidth: 2,
    borderColor: borderColor,
    borderRadius: 100,
  },
  checkBoxImage: {
    width: '100%',
    height: '100%',
  },
  taskTextContainer: {
    justifyContent: 'center',
    width: '80%',
    paddingBottom: 6,
  },
  titleText: {
    fontFamily: 'signika_light',
    color: color,
    fontSize: 22,
  },
  optionMenuContainer: {
    flex: 1,
    height: width * 0.08,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  optionMenuImage: {
    height: '100%',
  },
  bottomContainer: {
    marginLeft: 30,
  },
});
