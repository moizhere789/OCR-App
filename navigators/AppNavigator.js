import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigator from './BottomNavigator';
import SplashScreen from '../screens/SplashScreen';
import CropScreen from '../screens/CropScreen';
import ExtractedTextScreen from '../screens/ExtractedTextScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='BottomNavigator' component={BottomNavigator}/>
        <Stack.Screen name='CropScreen' component={CropScreen}/>
        <Stack.Screen name='ExtractedTextScreen' component={ExtractedTextScreen}/>
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})