import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
   
    height:"90%",
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
    marginTop:30,
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
    flex: 1,
    alignItems: 'center',
  },
});
