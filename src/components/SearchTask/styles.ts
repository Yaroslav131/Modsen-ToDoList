import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: '80%',
    backgroundColor: '#fff',
    elevation: 30,
  },
  searchFieldContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  searchButton: {
    minHeight: 30,
    flex: 1,
    alignSelf: 'center',
  },
  searchImage: {
    alignSelf: 'center',
    minHeight: 30,
  },
  searchInput: {
    fontFamily: 'jost_regular',
    color: '#363636',
    flex: 9,
    width: '100%',
    fontSize: 24,
  },
  errorText: {
    fontFamily: 'jost_regular',
    color: 'red',
    fontSize: 18,
    marginTop: 10,
  },
});
