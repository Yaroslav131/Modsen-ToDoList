import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

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
    color: '#363636',
  },
});
