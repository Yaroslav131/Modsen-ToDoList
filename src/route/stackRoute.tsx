import React, { useEffect, useState } from 'react';
import SnackBar from 'react-native-snackbar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomScreen from '@/screens/WelcomScreen';
import MainScreen from '@/screens/MainScreen';
import TaskScreen from '@/screens/TaskScreen';
import { RootStackParamList } from '@/types';
import { STORAGE_KEY } from '@/constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoute() {
  const [isWellcomSreenCheck, setIsWellcomSreenCheck] = useState<boolean | null>(null);

  useEffect(() => {
    async function getWellcomScreenCheck() {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        setIsWellcomSreenCheck(value !== null ? JSON.parse(value) : false);
      } catch (error) {
        setIsWellcomSreenCheck(false);
      }
    }

    getWellcomScreenCheck();
  }, []);

  if (isWellcomSreenCheck === null) {
    return null;
  }

  async function saveWellcomScreenCheck(value: boolean) {
    try {
      return await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (error: any) {
      SnackBar.show({
        text: `${error.message}`,
        duration: SnackBar.LENGTH_LONG, 
        
      });
    }
  }

  function checkWellcomSreen() {
    saveWellcomScreenCheck(true);
    setIsWellcomSreenCheck(true);
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isWellcomSreenCheck
        ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="HomeScreen"
              component={MainScreen}
            />
            <Stack.Screen
              name="TaskScreen"
              component={TaskScreen}
              options={({ route }: any) => ({ title: route.params.name })}
            />
          </>
        )
        : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="WelcomScreen"
          >
            {(props) => <WelcomScreen {...props} pressHandler={checkWellcomSreen} />}
          </Stack.Screen>
        )}
    </Stack.Navigator>
  );
}
