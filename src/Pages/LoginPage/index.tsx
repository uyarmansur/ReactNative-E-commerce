import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import tw from 'twrnc';

export default function LoginScreen() {
  const [name, setName] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      password: '',
    },
  });
  const navigation = useNavigation();

  const storeData = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('token', jsonValue);
    } catch (e) {
      Alert.alert('no Such a user');
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        navigation.navigate('TabStack');
      }
    } catch (e) {
      // error reading value
    }
  };
  getData();
  const onSubmit = data => console.log(data);
  const handleLoginPress = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: name,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then(res => res.json())
      .then(data => {
        storeData(data.token);
        if (data.token) {
          navigation.navigate('TabStack');
        }
      });
  };
  return (
    <View style={tw`flex-1 items-center justify-center bg-slate-50`}>
      <View style={tw`p-8 w-full max-w-sm`}>
        <Text style={tw`text-5xl font-bold mb-6 text-slate-900`}>BrandYol</Text>
        <Controller
          control={control}
          rules={{required: true}}
          name="name"
          render={() => (
            <TextInput
              style={tw`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
              placeholderTextColor="orange"
              placeholder="Enter Your Name"
              onChangeText={name => {
                setName(name);
              }}
            />
          )}
        />
        {errors.name && <Text>Name is required</Text>}
        <Controller
          control={control}
          name="password"
          rules={{required: true}}
          render={() => (
            <TextInput
              style={tw`w-full bg-white border border-slate-200 rounded-md h-12 px-4`}
              placeholderTextColor="orange"
              placeholder="Enter password"
              secureTextEntry={true}
              onChangeText={password => {
                setPassword(password);
              }}
            />
          )}
        />
        {errors.password && <Text>Password is required</Text>}
        <View style={tw`flex flex-row justify-between items-center my-8`}>
          <View style={tw`flex-row items-center`}>
            <Pressable
              style={tw`bg-white border border-slate-200 h-6 w-6 rounded-sm mr-2 flex items-center justify-center`}>
              {/* selected state */}
              <View style={tw`bg-orange-400 w-4 h-4 rounded-sm`} />
            </Pressable>
            <Text style={tw`text-slate-900`}>Remember me</Text>
          </View>
          <Pressable>
            <Text style={tw`text-blue-400 font-bold`}>Reset password</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => {
            handleSubmit(onSubmit);
            handleLoginPress();
          }}
          style={tw`h-12 bg-orange-500 rounded-md flex flex-row justify-center items-center px-6`}>
          <View style={tw`flex-1 flex items-center`}>
            <Text style={tw`text-white text-base font-medium`}>Login</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
