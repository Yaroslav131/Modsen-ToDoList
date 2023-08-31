import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  doneAll,
  drawerAllTasks,
  drawerHome,
  drawerImportant,
  drawerOverdue,
} from '@assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomScreen from '@/screens/WelcomScreen';
import MainScreen from '@/screens/MainScreen';
import TaskScreen from '@/screens/TaskScreen';
import { RootStackParamList } from '@/types';
import CustomDrawerItem from '@/components/CustomDrawerItem';
import { STORAGE_KEY } from '@/constants';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function Route() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
      >
        <Drawer.Screen
          options={{
            headerShown: false,
            drawerLabel: () => <CustomDrawerItem icon={drawerHome} title="Home" />,
          }}
          name="Home"
          component={StackRoute}
        />
        <Drawer.Screen
          name="Important tasks"
          component={TaskScreen}
          options={{
            headerShown: false,
            drawerLabel: () => <CustomDrawerItem icon={drawerImportant} title="Important tasks" />,
          }}
          initialParams={{ type: 'Important', title: 'Important tasks' }}
        />
        <Drawer.Screen
          name="Done tasks"
          component={TaskScreen}
          options={{
            headerShown: false,
            drawerLabel: () => <CustomDrawerItem icon={doneAll} title="Done tasks" />,
          }}
          initialParams={{ type: 'Done', title: 'Done tasks' }}
        />
        <Drawer.Screen
          name="Overdue  tasks"
          component={TaskScreen}
          options={{
            headerShown: false,
            drawerLabel: () => <CustomDrawerItem icon={drawerOverdue} title="Overdue tasks" />,
          }}
          initialParams={{ type: 'Falled', title: 'Overdue tasks' }}
        />
        <Drawer.Screen
          name="All  tasks"
          component={TaskScreen}
          options={{
            headerShown: false,
            drawerLabel: () => <CustomDrawerItem icon={drawerAllTasks} title="All tasks" />,
          }}
          initialParams={{ type: 'All', title: 'All tasks' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function StackRoute() {
  const [isWellcomSreenCheck, setIsWellcomSreenCheck] = useState<boolean | null>(null);

  useEffect(() => {
    // Функция для извлечения значения из AsyncStorage
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
    } catch (error) {

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

export default Route;
