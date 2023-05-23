// //import liraries
// import React, {Component, useEffect, useState} from 'react';
// import {View, Text, StyleSheet, Dimensions} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
// import Card from '../../components/common/Card';
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// // create a component
// const Cart = () => {
//   const [cartItems, setCartItems] = useState<any>({});

//   useEffect(() => {
//     fetch('https://dummyjson.com/carts/user/5')
//       .then(res => res.json())
//       .then(data => setCartItems(data.carts[0].products));
//   }, []);
//   const FlatItem = (item: any) => {
//     return (
//       <Card
//         source={item.item.thumbnail}
//         category={item.item.category}
//         brand={item.item.brand}
//         title={item.item.title}
//         price={item.item.price}
//       />
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <FlatList
//         ItemSeparatorComponent={() => <View style={{height: 10}} />}
//         numColumns={2}
//         data={cartItems}
//         renderItem={FlatItem}></FlatList>
//     </View>
//   );
// };

// define your styles
// const styles = StyleSheet.create({
//   container: {
//     width: windowWidth,
//     flexWrap: 'wrap',
//   },
// });

// //make this component available to the app
// export default Cart;
import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          animateOnMount={true}
          enablePanDownToClose={true}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
