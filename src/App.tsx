import React, {useState} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/HomeScreen';
import {CartScreen} from './screens/CartScreen';
import {FavoritesScreen} from './screens/FavoritesScreen';
import {NotificationScreen} from './screens/NotificationScreen';
import {HomeIcon} from './icons/HomeIcon';
import {CartIcon} from './icons/CartIcon';
import {NotificationIcon} from './icons/NotificationIcon';
import {FavoritesIcon} from './icons/FavoritesIcon';

function App(): JSX.Element {
  const RootStack = createBottomTabNavigator();
  const [isNotification] = useState(true);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#201520',
      border: 'rgb(34, 21, 31)',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarLabel: '',
          tabBarActiveTintColor: '#EFE3C8',
          tabBarInactiveTintColor: 'rgba(239, 227, 200, 0.4)',
          tabBarStyle: {
            height: 78,
            paddingTop: 35,
            backgroundColor: '#22151F',
          },
        }}>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <HomeIcon color={color} size={size} />
            ),
          }}
        />
        <RootStack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <CartIcon color={color} size={size} />
            ),
          }}
        />
        <RootStack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FavoritesIcon color={color} size={size} />
            ),
          }}
        />
        <RootStack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <NotificationIcon
                color={color}
                size={size}
                isNotification={isNotification}
              />
            ),
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
