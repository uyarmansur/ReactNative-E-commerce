//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homepage from '../HomePage';
import Cart from '../Cart';
import Categories from '../Categories';
import Favourites from '../Favourites';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

// create a component
const MyComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, iconName, color}: any) => {
          if (route.name === 'HomePage') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Favourites') {
            iconName = 'heart-o';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else {
            iconName = 'th';
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
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyComponent;
