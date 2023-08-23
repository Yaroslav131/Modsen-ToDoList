/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';

import { Provider } from 'react-redux';
import WelcomScreen from '@/screens/WelcomScreen';
import MainScreen from '@/screens/MainScreen';
import store from '@/store/store';
import Task from '@/components/Task';
import TaskScreen from '@/screens/TaskScreen';

function App() {
  const [isWellcomSreenCheck, setIsWellcomSreenCheck] = useState<boolean>(false);

  function CheckWellcomSreen() {
    setIsWellcomSreenCheck(true);
  }

  return (
    <Provider store={store}>
      {isWellcomSreenCheck
        ? (
        //  <MainScreen />
          <TaskScreen />
        )
        : <WelcomScreen pressHandler={CheckWellcomSreen} />}
    </Provider>
  );
}

export default App;
