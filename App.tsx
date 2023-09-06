import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';
import store, { loadDataFromAsyncStorage } from '@/store/store';
import Route from '@/route';
import 'react-native-gesture-handler';
import ErrorBoundary from '@/screens/ErrorBoundary';

function App() {
  useEffect(() => {
    loadDataFromAsyncStorage();
    SplashScreen.hide();
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <StatusBar backgroundColor="#646FD4" barStyle="light-content" />
        <Route />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
