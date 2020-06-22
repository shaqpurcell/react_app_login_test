/* 
 FILENAME:		WelcomeScreen.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			19-June-2020 
 DESCRIPTION:	
 */

 import React from 'react'
 import { StyleSheet, Text, View } from 'react-native'
 import AppButton from '../components/AppButton'
 import AppScreen from '../components/AppScreen'
import { NavigationContainer } from '@react-navigation/native'
 
 export default function WelcomeScreen(props) {
     return (
         <AppScreen>
            <Text>Welcome</Text>
            <AppButton title="Login" onPress={() => props.navigation.navigate("Login")}></AppButton>
            <AppButton title="Register" onPress={() => props.navigation.navigate("Register")}></AppButton>
         </AppScreen>

     )
 }
 
 const styles = StyleSheet.create({})
 