//import liraries
import {useRoute} from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';
import CommonCardButton from '../../components/common/CommonCardButton';
import HomeBody from '../../components/HomeBody';
import AdCard from '../../components/common/AdCard';

// import {useRoute} from '@react-navigation/native';
// create a component
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const Detail = () => {
  const [user, setUser] = useState<any>({});
  const [singleProduct, setSingleProduct] = useState<any>({});
  const [comment, setComment] = useState<any>({});
  const [adImages, setAdImages] = useState<any>('');
  const route: any = useRoute();
  const id = route?.params?.id;
  const randomNumber = Math.ceil(Math.random() * 20);
  useEffect(() => {
    imageApi(), userApi(), productApi(), commentApi();
  }, []);

  const imageApi = () => {
    fetch(
      'https://serpapi.com/?af58fcf21d4e0457146a606adca51cfbaeceb0568d70c540a0cbee84ab453b8=search.json?engine=bing_images&q=smartphones',
    )
      .then(res => res.json())
      .then(data => console.log(data));
    console.log(adImages);
  };
  const userApi = () => {
    fetch(`https://dummyjson.com/users`)
      .then(res => res.json())
      .then(data => setUser(data.users[Math.ceil(Math.random() * 25)]));
  };
  const productApi = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setSingleProduct(data));
  };
  const commentApi = () => {
    fetch('https://dummyjson.com/comments?limit=10&skip=10&select=body')
      .then(res => res.json())
      .then(data => setComment(data.comments));
  };
  const FlatItem = (item: any) => {
    return (
      <Image
        resizeMode="stretch"
        style={styles.itemImages}
        source={{uri: item.item}}
      />
    );
  };
  const CommentFlatItem = (item: any) => {
    return (
      <View style={tw`flex-column border-2 rounded-xl p-3 h-[50] w-90`}>
        <View style={tw`flex-row justify-between`}>
          <Text>**** ****</Text>
          <Text>
            {Math.ceil(Math.random() * 30)}/{Math.ceil(Math.random() * 12)}
            /202
            {Math.ceil(Math.random() * 3)}
          </Text>
        </View>
        <Text style={tw`text-slate-400 font-bold`}>{item.item.body}</Text>
      </View>
    );
  };
  const adCardFlatItem = (item: any) => {
    console.log(item.thumbnail);
    return <AdCard source={item?.thumbnail} title="naber" />;
  };
  return (
    <View style={styles.container}>
      <ScrollView style={tw`pb-[20]`}>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={singleProduct.images}
            renderItem={FlatItem}
          />
        </View>
        <View style={tw`p-3`}>
          <View>
            <Text>
              <Text style={tw`text-orange-300`}>{singleProduct.title} </Text>
              {singleProduct.description}
            </Text>
          </View>
          <View style={tw`flex-row pt-2 pb-3`}>
            <Text>Rating:{singleProduct.rating} | </Text>
            <Text>{Math.ceil(Math.random() * 2000)} evaluation</Text>
          </View>
        </View>
        <View
          style={tw`flex-row justify-between w-full border-t-2 border-b-2 border-indigo-500`}>
          <View
            style={tw`flex-row align-center justify-around w-[40%] pt-3 pb-3 pl-2`}>
            <Image
              style={tw`bg-blue-200 p-2 rounded-3xl h-[10] w-[10]`}
              source={{uri: user?.image}}
            />
            <View style={tw`flex-row`}>
              <View>
                <Text style={tw` self-center font-bold text-lg`}>
                  {user?.maidenName}
                  <Icon
                    name="checkcircle"
                    color="#00bfff"
                    size={20}
                    // style={tw`bg-blue-400 rounded-2xl justify-center`}
                  />
                </Text>
                <Text>{Math.ceil(Math.random() * 2000)} followers</Text>
              </View>
            </View>
          </View>
          <View style={tw`justify-center pr-3`}>
            <Text
              style={tw`p-3 border-2 border-orange-300 text-orange rounded-xl text-center text-orange-300`}>
              Follow
            </Text>
          </View>
        </View>
        <View style={tw`p-3 rounded-xl`}>
          <View>
            <FlatList
              ItemSeparatorComponent={() => <View style={{width: 10}} />}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={comment}
              renderItem={CommentFlatItem}
            />
          </View>
        </View>
        <View style={tw`w-full justify-center`}>
          <FlatList
            contentContainerStyle={tw`self-center`}
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
            data={adImages}
            renderItem={adCardFlatItem}
          />
        </View>
      </ScrollView>
      <View style={tw`w-full border-t-2 bg-white absolute bottom-0 py-3`}>
        <View style={tw`flex-row justify-around`}>
          <Text style={tw`text-orange-500 self-center text-lg`}>
            {singleProduct.price}$
          </Text>
          <View style={tw`w-[75%]`}>
            <CommonCardButton title="Add To Cart" />
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 65,
  },
  itemImages: {
    width: windowWidth,
    height: windowHeight / 2,
  },
});

//make this component available to the app
export default Detail;
