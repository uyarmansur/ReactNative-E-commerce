//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import Card from '../common/Card';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// create a component
const HomeBody = () => {
  const [products, setProducts] = useState<any>({});

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10&skip=10')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);
  const FlatItem = (item: any) => {
    return (
      <Card
        source={item.item.thumbnail}
        category={item.item.category}
        brand={item.item.brand}
        title={item.item.title}
        price={item.item.price}
        id={item.item.id}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        numColumns={2}
        data={products}
        renderItem={FlatItem}></FlatList>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    padding: 10,
    paddingBottom: 60,
    // flexWrap: 'wrap',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

//make this component available to the app
export default HomeBody;
