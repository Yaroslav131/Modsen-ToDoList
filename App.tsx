import React, { useEffect } from 'react';
import { StatusBar, Appearance } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';
import store, { loadDataFromAsyncStorage } from '@/store/store';
import Route from '@/route';
import 'react-native-gesture-handler';
import ErrorBoundary from '@/screens/ErrorBoundary';
import { ligthTheme } from '@/theme';

function App() {
  useEffect(() => {
    loadDataFromAsyncStorage();
    SplashScreen.hide();
  }, []);

  const theme = Appearance.getColorScheme();

  const background = theme === "light" ? ligthTheme.statusBar.backgroundColor : ligthTheme.searchTask.backgroundColor

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <StatusBar backgroundColor={background} barStyle="light-content" />
        <Route />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
