import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  subTaskContainer: {
    flexDirection: 'row',
    width: '80%',
    gap: 15,
    marginLeft: 15,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'signika_light',
    color: '#363636',
    fontSize: 18,
  },
  checkBox: {
    height: width * 0.07,
    width: width * 0.07,
    borderWidth: 2,
    borderColor: '#e7e7e7',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxImage: {
    width: '100%',
    height: '100%',
  },
  cancelButton: {
    height: width * 0.07,
    width: width * 0.07,
    borderColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
