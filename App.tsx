import React, { useState } from 'react';

import WelcomScreen from './src/screens/WelcomScreen';
import MainScreen from './src/screens/MainScreen';

function App(): JSX.Element {
  const [isWellcomSreenCheck, setIsWellcomSreenCheck] = useState<Boolean>(false)

  function CheckWellcomSreen() {
    setIsWellcomSreenCheck(true)
  }

  return (
    isWellcomSreenCheck ?
      <>
      <MainScreen/>
      </>
      :
      <WelcomScreen pressHandler={CheckWellcomSreen}/>
  );
}


export default App;
