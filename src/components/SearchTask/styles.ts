import { ligthTheme } from '@/theme';
import { StyleSheet, Appearance } from 'react-native';

const theme = Appearance.getColorScheme();

// const background = theme === "light" ? ligthTheme.searchTask.backgroundColor : ligthTheme.searchTask.backgroundColor
const color = theme === "light" ? ligthTheme.searchTask.color : ligthTheme.searchTask.color

export const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: '80%',
    backgroundColor: "#FFF",
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
    resizeMode: 'stretch'
  },
  searchInput: {
    
    fontFamily: 'jost_regular',
    color: color,
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
