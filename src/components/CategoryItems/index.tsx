//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {List} from 'react-native-paper';
import Card from '../common/Card';
import tw from 'twrnc';
// create a component
const CategoryItems = ({singleCategoryName}: any) => {
  const [expanded, setExpanded] = React.useState(true);
  const [singleCategoryItems, setSingleCategoryItems] = useState<any>();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${singleCategoryName}`)
      .then(res => res.json())
      .then(data => setSingleCategoryItems(data.products));
  }, [singleCategoryName]);
  const handlePress = () => setExpanded(!expanded);
  const FlatItem = (item: any) => {
    return (
      <Card
        source={item.item.thumbnail}
        category={item.item.category}
        brand={item.item.brand}
        title={item.item.title}
        price={item.item.price}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text style={tw`font-bold pb-4`}>{singleCategoryName.toUpperCase()}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        contentContainerStyle={{paddingLeft: 3}}
        data={singleCategoryItems}
        renderItem={FlatItem}
        onEndReachedThreshold={3}
      />
      <List.Section>
        <List.Accordion
          title="Sana Özel"
          left={props => <List.Icon {...props} icon="folder" />}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
            contentContainerStyle={{paddingLeft: 3}}
            data={singleCategoryItems}
            renderItem={FlatItem}
            onEndReachedThreshold={3}
          />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
            contentContainerStyle={{paddingLeft: 3}}
            data={singleCategoryItems}
            renderItem={FlatItem}
            onEndReachedThreshold={3}
          />
        </List.Accordion>
      </List.Section>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: '',
  },
});

//make this component available to the app
export default CategoryItems;
