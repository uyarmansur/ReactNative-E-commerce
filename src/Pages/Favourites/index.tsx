import React, {useCallback, useRef, useMemo, useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import Card from '../../components/common/Card';
import HomeBody from '../../components/HomeBody';
import tw from 'twrnc';
import {useBottomSheetDynamicSnapPoints} from '@gorhom/bottom-sheet';
const App = () => {
  const [cartItems, setCartItems] = useState<any>({});

  useEffect(() => {
    fetch('https://dummyjson.com/carts/user/5')
      .then(res => res.json())
      .then(data => setCartItems(data.carts[0].products));
  }, []);
  const FlatItem = useCallback(
    ({item}: any) => (
      <View style={styles.itemContainer}>
        <View>
          <Text>
            Title:<Text style={tw`text-orange-400`}>{item?.title}</Text>
          </Text>
          <Text>
            Price:<Text style={tw`text-orange-400`}>{item?.price}$</Text>
          </Text>
          <Text>
            Quantity:<Text style={tw`text-orange-400`}>{item?.quantity}$</Text>
          </Text>
          <Text>
            Total:<Text style={tw`text-orange-400`}>{item?.total}$</Text>
          </Text>
        </View>
        <View></View>
      </View>
    ),
    [],
  );
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['3%', '50%', '90%'], []);

  // callbacks
  const handleSheetChange = useCallback((index: any) => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback((index: any) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render

  return (
    <View style={styles.container}>
      <View>
        <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
        {/* <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} /> */}
        {/* <Button title="Close" onPress={() => handleClosePress()} /> */}
      </View>
      <View>
        <HomeBody />
      </View>
      <BottomSheet
        // enableHandlePanningGesture={true}
        // enableHandlePanningGesture={false}
        animateOnMount
        enablePanDownToClose={true}
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        <View>
          <Text style={tw`text-center`}>Cart</Text>
        </View>
        <BottomSheetFlatList
          initialNumToRender={3}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={3}
          windowSize={7}
          data={cartItems}
          renderItem={FlatItem}
        />
        <Button color="orange" title="Pay" onPress={() => handleClosePress()} />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    // backgroundColor: '#eee',
    shadowColor: 'orange',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 1.55,
    borderRadius: 5,
  },
});

export default App;
