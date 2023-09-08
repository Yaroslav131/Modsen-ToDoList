import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'flex-start',
    alignSelf: 'center',
    width: '80%',
    elevation: 25,
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
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  customButton: {
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#646fd4',
  },
});