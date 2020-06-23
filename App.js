/* 
 FILENAME:		  App.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			    17-June-2020 
 DESCRIPTION:	
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import configureStore from "./store/configureStore"
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import UserNavigator from './navigation/UserNavigator';


//Example of logging in

const store = configureStore();

//(18/Jun/20)::(09:14:42) - Log user in test

class App extends Component {
  state = {userSession: undefined};
  componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
        const storeUserSession = store.getState().auth.userSession;
        if (this.state.userSession !== storeUserSession) {
          this.setState({userSession: storeUserSession});
        }
      
        
      })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() { 
    return (
      <Provider store={store}>
          <NavigationContainer>
            {this.state.userSession ? <UserNavigator/> : <AuthNavigator/> }
          </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
