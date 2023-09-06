import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  blurViewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
