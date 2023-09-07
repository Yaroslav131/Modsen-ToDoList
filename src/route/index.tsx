import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { images } from '@/constants';
import TaskScreen from '@/screens/TaskScreen';
import { RootStackParamList } from '@/types';
import CustomDrawerItem from '@/components/CustomDrawerItem';
import { StackRoute } from './stackRoute';

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
            drawerLabel: () => <CustomDrawerItem icon={images.drawerHome} title="Home" />,
          }}
          name="Home"
          component={StackRoute}
        />
        <Drawer.Screen
          name="Important tasks"
          component={TaskScreen}
          options={{
            headerShown: false,
            drawerLabel: () => <CustomDrawerItem icon={images.drawerImportant} title="Important tasks" />,
          }}
          initialParams={{ type: 'Important', title: 'Important tasks' }}
        />
        <Drawer.Screen
          name="Done tasks"
          component={TaskScreen}
          options={{
            headerShown: false,
            drawerLabel: () => <CustomDrawerItem icon={images.doneAll} title="Done tasks" />,
          }}
          initialParams={{ type: 'Done', title: 'Done tasks' }}
        />
        <Drawer.Screen
          name="Overdue  tasks"
          component={TaskScreen}
          options={{
            headerShown: false,
            drawerLabel: () => <CustomDrawerItem icon={images.drawerOverdue} title="Overdue tasks" />,
          }}
          initialParams={{ type: 'Falled', title: 'Overdue tasks' }}
        />
        <Drawer.Screen
          name="All  tasks"
          component={TaskScreen}
          options={{
            headerShown: false,
            drawerLabel: () => <CustomDrawerItem icon={images.drawerAllTasks} title="All tasks" />,
          }}
          initialParams={{ type: 'All', title: 'All tasks' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Route;
