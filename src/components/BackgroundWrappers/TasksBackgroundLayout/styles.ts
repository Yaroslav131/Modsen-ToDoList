import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftEllipse: {
    position: 'absolute',
    left: -15,
    top: -15,
    height: windowWidth / 1.7,
    width: windowWidth / 1.7,
    resizeMode: 'stretch',
    zIndex: 1,
  },
  rightEllipse: {
    position: 'absolute',
    right: -15,
    top: -15,
    width: windowWidth / 1.4,
    resizeMode: 'stretch',
    zIndex: 2,
  },
  childrenContainer: {
    flex: 1,
    zIndex: 5,
  },
});
