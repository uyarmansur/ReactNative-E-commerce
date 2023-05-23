//import liraries
import React, {Component, useEffect, useState} from 'react';
import {Alert, FlatList, TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import tw from 'twrnc';
const windowWidth = Dimensions.get('window').width;
// create a component
const CategoryMenu = ({setSingleCategoryName}: any) => {
  const [categoryName, setCategoryName] = useState<any>();

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategoryName(data));
  }, []);
  const FlatItem = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => setSingleCategoryName(item.item)}
        style={tw`border-2 border-white rounded p-3`}>
        <Text style={tw`text-white`}>{item.item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        data={categoryName}
        renderItem={FlatItem}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: windowWidth / 4,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'orange',
  },
  eachItem: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
});

//make this component available to the app
export default CategoryMenu;
