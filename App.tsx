/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Provider } from 'react-redux';
import store, { loadDataFromAsyncStorage } from '@/store/store';
import Route from '@/route';
import 'react-native-gesture-handler'
import ErrorBoundary from '@/screens/ErrorBoundary';

function App() {
  useEffect(() => {
    loadDataFromAsyncStorage()
  }, [])

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Route />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
