/* 
 FILENAME:		  App.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			    17-June-2020 
 DESCRIPTION:	
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import configureStore from "./store/configureStore"
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';

//Example of logging in


const store = configureStore();

//(18/Jun/20)::(09:14:42) - Log user in test

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator/>
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
