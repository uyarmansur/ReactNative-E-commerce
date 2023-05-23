//import liraries
import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import CommonCardButton from '../CommonCardButton';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// create a component
const Card = ({source, title, brand, category, price, id}: any) => {
  return (
    <View
      style={[
        tw`bg-white rounded-xl`,
        {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        styles.container,
      ]}>
      <View>
        <Image
          style={tw`w-full rounded-t-xl`}
          resizeMode="stretch"
          source={{uri: `${source}`}}
        />
      </View>
      <View style={[tw`p-1 w-[90%]`]}>
        <Text style={tw`text-slate-700 text-sm font-bold`}>
          {brand},{title}
        </Text>
        <Text style={tw`text-slate-300 text-sm font-normal`}>
          {category?.toUpperCase()}
        </Text>
        <View>
          <Text style={tw`text-slate-700 text-sm font-thin`}>{price}$</Text>
        </View>
        <CommonCardButton title="Go To Detail" id={`${id}`} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2.2,
    height: windowHeight / 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },
});

//make this component available to the app
export default Card;
