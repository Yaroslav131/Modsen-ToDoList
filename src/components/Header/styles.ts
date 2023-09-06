import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.08,
  },
  leftButton: {
    padding: 5,
    justifyContent: 'center',
    width: height * 0.04,
    height: height * 0.04,
    position: 'absolute',
    left: 0,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
  },
  titleText: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'jost_semiBold',
  },
});
