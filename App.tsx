import React, { useState } from 'react';

import WelcomScreen from './src/screens/WelcomScreen';
import MainScreen from './src/screens/MainScreen';
import { Provider } from 'react-redux';
import store from './src/store/store';

function App(): JSX.Element {
  const [isWellcomSreenCheck, setIsWellcomSreenCheck] = useState<Boolean>(false)

  function CheckWellcomSreen() {
    setIsWellcomSreenCheck(true)
  }

  return (
    <Provider store={store}>
      {isWellcomSreenCheck ?
        <>
          <MainScreen />
        </>
        :
        <WelcomScreen pressHandler={CheckWellcomSreen} />}
    </Provider>
  );
}


export default App;
