//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
// create a component
const CommonCardButton = ({id, title}: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {id: id});
      }}
      style={tw`px-4 py-2 text-sm bg-orange-500 rounded shadow`}>
      <Text style={tw`text-white text-center`}>{title}</Text>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default CommonCardButton;
