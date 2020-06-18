/* 
 FILENAME:		AppScreen.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			18-June-2020 
 DESCRIPTION:	
 */ 

 import React from 'react'
 import Constants from 'expo-constants'
 import { StyleSheet, SafeAreaView } from 'react-native'
 
 export default function AppScreen({children}) {
     return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
     )
 }

 const styles = StyleSheet.create({
     screen: {
         paddingTop: Constants.statusBarHeight
     }
 })
 
 