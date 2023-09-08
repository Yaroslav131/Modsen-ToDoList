import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { IMAGES } from '@/constants';
import TaskScreen from '@/screens/TaskScreen';
import CustomDrawerItem from '@/components/CustomDrawerItem';
import { StackRoute } from './stackRoute';

const Drawer = createDrawerNavigator();

const drawerScreens = [
  {
    name: 'Home',
    component: StackRoute,
    options: {
      headerShown: false,
      drawerLabel: () => <CustomDrawerItem icon={IMAGES.drawerHome} title="Home" />,
    },
  },
  {
    name: 'Important tasks',
    component: TaskScreen,
    options: {
      headerShown: false,
      drawerLabel: () => <CustomDrawerItem icon={IMAGES.drawerImportant} title="Important tasks" />,
    },
    initialParams: { type: 'Important', title: 'Important tasks' },
  },
  {
    name: 'Done tasks',
    component: TaskScreen,
    options: {
      headerShown: false,
      drawerLabel: () => <CustomDrawerItem icon={IMAGES.doneAll} title="Done tasks" />,
    },
    initialParams: { type: 'Done', title: 'Done tasks' },
  },
  {
    name: 'Overdue tasks',
    component: TaskScreen,
    options: {
      headerShown: false,
      drawerLabel: () => <CustomDrawerItem icon={IMAGES.drawerOverdue} title="Overdue tasks" />,
    },
    initialParams: { type: 'Falled', title: 'Overdue tasks' },
  },
  {
    name: 'All tasks',
    component: TaskScreen,
    options: {
      headerShown: false,
      drawerLabel: () => <CustomDrawerItem icon={IMAGES.drawerAllTasks} title="All tasks" />,
    },
    initialParams: { type: 'All', title: 'All tasks' },
  },
];

function Route() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {drawerScreens.map((screen, index) => (
          <Drawer.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={screen.options}
            initialParams={screen.initialParams}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Route;