import { ligthTheme } from '@/theme';
import { Appearance, StyleSheet } from 'react-native';

const theme = Appearance.getColorScheme();

const color = theme === "light" ? ligthTheme.header.color : ligthTheme.header.color

export const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: "10%",
  },
  leftButton: {
    padding: 5,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },
  buttonImage: {
    resizeMode: 'stretch'
  },
  titleText: {
    fontSize: 28,
    color: color,
    fontFamily: 'jost_semiBold',
  },
});
