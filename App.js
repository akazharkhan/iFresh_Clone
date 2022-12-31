import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import MainNavigator from './src/navigation/MainNavigator'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
  }, []);
  return (
    <MainNavigator />
  )
}

export default App

const styles = StyleSheet.create({})