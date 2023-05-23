import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import tw from 'twrnc';
const windowWidth = Dimensions.get('screen').width;
const AdCard = ({source, title}: any) => {
  return (
    <View
      style={[
        tw` rounded-xl w-[${windowWidth}] max-w-xs relative`,
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
      ]}>
      <Image
        source={{uri: source}}
        style={tw`w-full h-40 rounded-xl`}
        resizeMode="stretch"
      />
      <Text
        style={tw`text-slate-900 text-lg font-normal absolute right-4.5 bottom-[10%] text-orange-400 bg-white p-2 rounded`}>
        {title} has {Math.ceil(Math.random() * 30)}% discount
      </Text>
    </View>
  );
};

export default AdCard;
