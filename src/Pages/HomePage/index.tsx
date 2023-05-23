//import liraries
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../../components/Header';
import HomeBody from '../../components/HomeBody';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from '../../components/BottomSheet';
// create a component
const Homepage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <HomeBody />
      <BottomSheet />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    // margin:10
  },
});

//make this component available to the app
export default Homepage;
