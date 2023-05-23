/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stack/HomeStackScreen';
import SettingsScreenStack from './stack/SettingsStackScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BlurView} from 'expo-blur';
import Homepage from './Pages/HomePage';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Favourites from './Pages/Favourites';
import Categories from './Pages/Categories';
import TabMenu from './Pages/TabMenu';
import Detail from './Pages/Detail';
import LoginPage from './Pages/LoginPage';
// const Stack = createBottomTabNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, iconName, color}: any) => {
              if (route.name === 'HomePage') {
                iconName = 'home';
              } else if (route.name === 'Profile') {
                iconName = 'user';
              } else if (route.name === 'Favourites') {
                iconName = 'heart-o';
              } else if (route.name === 'Categories') {
                iconName = 'th';
              } else {
                iconName = 'shopping-cart';
              }
              return (
                <Icon
                  name={iconName}
                  size={30}
                  color={focused ? 'white' : 'orange'}
                />
              );
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'orange',
            tabBarActiveBackgroundColor: 'orange',
          })}>
          <Tab.Screen
            name="HomePage"
            component={Homepage}
            options={{
              tabBarLabel: 'HomePage',
            }}
          />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen
            name="Categories"
            component={Categories}
            options={{
              tabBarLabel: 'Categories',
            }}
          />
          <Tab.Screen
            name="Favourites"
            component={Favourites}
            options={{
              tabBarLabel: 'Favourites',
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
            }}
          />
        </Tab.Navigator> */}
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen
            name="TabStack"
            component={TabMenu}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
