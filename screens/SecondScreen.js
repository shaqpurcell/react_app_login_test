/* 
 FILENAME:		SecondScreen.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			18-June-2020 
 DESCRIPTION:	
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SubScreenOne from './SubScreenOne';
import SubScreenTwo from './SubScreenTwo';

const BottomTab = createBottomTabNavigator();

function SecondScreen() {
    return (
            <BottomTab.Navigator>
                <BottomTab.Screen name="SubScreenOne" component={SubScreenOne}/>
                <BottomTab.Screen name="SubScreenTwo" component={SubScreenTwo}/>
            </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({})

export default SecondScreen;