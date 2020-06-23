import React from 'react'
import { StyleSheet, Button } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import SecondScreen from '../screens/SecondScreen'
import { logUserOut } from '../store/features/auth'
import { connect } from "react-redux"

const Stack = createStackNavigator();

function UserNavigator(props) {
    async function handleLogout() {
        await props.logUserOut();
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="second" component={SecondScreen} options={{
                        headerTitleAlign: 'center',
                        headerLeft: () => (
                            <Button
                              onPress={handleLogout}
                              title="Menu/Logout"
                              color="#000"
                            />
                          ),
                        headerRight: () => (
                            <Button
                              onPress={() => alert('This is a button!')}
                              title="Screen Icon"
                              color="#000"
                            />
                          ),
                    }}/>
        </Stack.Navigator>
    )
}

const mapDispatchToProps = dispatch => ({
    logUserOut: () => dispatch(logUserOut()),
})


export default connect(null, mapDispatchToProps)(UserNavigator);

const styles = StyleSheet.create({})