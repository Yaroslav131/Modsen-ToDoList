import { ligthTheme } from '@/theme';
import { StyleSheet, Appearance } from 'react-native';

const theme = Appearance.getColorScheme();

const dailyTaskTextColor = theme === "light" ? ligthTheme.mainScreen.dailyTaskTextColor : ligthTheme.mainScreen.dailyTaskTextColor
const changeableTaskTextColor = theme === "light" ? ligthTheme.mainScreen.changeableTaskTextColor : ligthTheme.mainScreen.changeableTaskTextColor
const dateTextColor = theme === "light" ? ligthTheme.mainScreen.dateTextColor : ligthTheme.mainScreen.dateTextColor

export const styles = StyleSheet.create({
  container: {
    height: "90%",
    alignItems: 'center',
  },
  dateButtonContainer: {
    marginTop: 50,
    marginBottom: 30,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
  },
  dailyTaskText: {
    fontFamily: 'jost_semiBold',
    color: dailyTaskTextColor,
    fontSize: 28,
    textAlign: 'center',
    marginTop: 30,
  },
  changeableTaskText: {
    color: changeableTaskTextColor,

  },
  dateText: {
    fontFamily: 'jost_semiBold',
    color: dateTextColor,
    fontSize: 20,
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
