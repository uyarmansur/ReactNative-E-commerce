//import liraries
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Favourites from '../../Pages/Favourites';
// import Cart from '../../Pages/Cart';
// import Categories from '../../Pages/Categories';
import Detail from '../../Pages/Detail';
import Homepage from '../../Pages/HomePage';
const HomeStack = createNativeStackNavigator();
// create a component
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Homepage" component={Homepage} />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default HomeStackScreen;
