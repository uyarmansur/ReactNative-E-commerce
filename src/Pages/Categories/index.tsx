//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CategoryMenu from '../../components/CategoryMenu';
import CategoryItems from '../../components/CategoryItems';

// create a component
const Categories = () => {
  const [singleCategoryName, setSingleCategoryName] = useState<any>('smartphones');
  return (
    <View style={styles.container}>
      <CategoryMenu setSingleCategoryName={setSingleCategoryName} />
      <CategoryItems singleCategoryName={singleCategoryName} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Categories;
