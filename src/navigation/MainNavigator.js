import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
/*

 Always use stack navigation at the root of your project

*/
const MainNavigator = () => {

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={"#0AB252"} ></StatusBar>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default MainNavigator;