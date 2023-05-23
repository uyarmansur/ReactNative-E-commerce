//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import CameraIcon from 'react-native-vector-icons/Feather';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// create a component
const SearchInput = () => {
  return (
    <View style={styles.container}>
      <SearchIcon
        name="search1"
        size={20}
        color="#900"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Ürün,Kategori veya marka ara"
      />
      <CameraIcon size={20} name="camera" style={styles.cameraIcon} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding:1
  },
  searchIcon: {
    position: 'absolute',
    left: 5,
    color:"orange"
  },
  cameraIcon: {
    position: 'absolute',
    right: 5,
    color:"orange"
  },
  input: {
    borderWidth: 2,
    width: windowWidth / 1.4,
    paddingLeft:25,
    borderRadius:15
  },
});

//make this component available to the app
export default SearchInput;
