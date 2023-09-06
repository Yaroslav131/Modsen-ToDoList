import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dateButtonContainer: {
    marginTop: 50,
    marginBottom: 30,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
  },
  dailyTaskText: {
    fontFamily: 'jost_semiBold',
    color: '#363636',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 40,
  },
  changeableTaskText: {
    color: '#fff',
  },
  dateText: {
    fontFamily: 'jost_semiBold',
    color: '#363636',
    fontSize: 20,
    textAlign: 'center',
  },
  bottomContainer: {
    height: screenWidth * 0.28 * 3 + screenWidth * 0.02 * 6,
    alignItems: 'center',
  },
});
