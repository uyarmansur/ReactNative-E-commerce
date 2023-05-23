//import liraries
import React, {useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchInput from '../common/SearchInput';
import HmmIcon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// create a component
const Header = () => {
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
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image
          style={{width: 50, height: 50, alignSelf: 'flex-start'}}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}></Image>
      </View>
      <View>
        <SearchInput />
      </View>

      <BottomSheetModalProvider>
        <View style={styles.bottomContainer}>
          <Pressable onPress={handlePresentModalPress}>
            <HmmIcon name="notifications" color="orange"></HmmIcon>
          </Pressable>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            detached={true}
            enablePanDownToClose={true}
            bottomInset={0}>
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#b3b3',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
});

//make this component available to the app
export default Header;
