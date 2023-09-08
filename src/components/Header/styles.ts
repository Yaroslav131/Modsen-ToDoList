import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

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
    color: '#fff',
    fontFamily: 'jost_semiBold',
  },
});
