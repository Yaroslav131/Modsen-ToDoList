import { ligthTheme } from '@/theme';
import { Dimensions,Appearance, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const theme = Appearance.getColorScheme();

const color = theme === "light" ? ligthTheme.errorBoundary.color : ligthTheme.errorBoundary.color

export const styles = StyleSheet.create({
  errorContainer: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontFamily: 'jost_semiBold',
    textAlign: 'center',
    fontSize: 24,
    color: color,
  },
});
