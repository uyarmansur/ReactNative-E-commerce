//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from '../../Pages/Profile';


const SettingStack=createNativeStackNavigator()
// create a component
const SettingsScreenStack = () => {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen name='Profile' component={Profile}/>
        </SettingStack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SettingsScreenStack;
