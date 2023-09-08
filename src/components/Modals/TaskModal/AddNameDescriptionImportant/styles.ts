import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
  },
  nameInputContainer: {
    flex: 9,
  },
  checkBox: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 2,
  },
  checkBoxImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  titleText: {
    fontSize: 22,
    fontFamily: 'signika_regular',
    color: '#363636',
  },
  textInput: {
    fontFamily: 'jost_regular',
    color: '#363636',
    width: '100%',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});