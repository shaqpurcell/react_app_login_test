/* 
 FILENAME:		  App.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			    17-June-2020 
 DESCRIPTION:	
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from "./store/configureStore"
import * as actions from './store/features/auth'
import LoginScreen from './screens/LoginScreen'
import { Provider } from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  SecondScreen from './screens/SecondScreen';

//Example of logging in


const store = configureStore();
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login Screen" component={LoginScreen}/>
    <Stack.Screen name="Second Screen" component={SecondScreen}/>
  </Stack.Navigator>
)

//(18/Jun/20)::(09:14:42) - Log user in test

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
