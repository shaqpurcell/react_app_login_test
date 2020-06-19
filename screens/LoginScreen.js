/* 
 FILENAME:		LoginScreen.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			18-June-2020 
 DESCRIPTION:	
 */

import React from 'react'
import { StyleSheet, Text } from 'react-native'

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import AppScreen from '../components/AppScreen'
import { Formik } from 'formik'
import * as Yup from 'yup' 
import { connect } from "react-redux"
import { logUserIn } from '../store/features/auth'

//(18/Jun/20)::(09:36:27) - All variables that need to be validated within a form, as well as the rules for validation
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

//(18/Jun/20)::(11:27:21) - BUG: Login values are not properly submitted to action. 
function LoginScreen(props) {
    async function handleLogin(email, password) {
        await props.logUserIn(email, password);
        console.log(email);
        console.log(password);
        if (props.user !== null) {
            props.navigation.navigate("Second Screen");
        }
    }
    return (

        <AppScreen style={styles.container}>
                <Formik
                    initialValues={{email: "", password: ""}}
                    onSubmit={(values) => handleLogin(values.email, values.password)}
                    validationSchema={validationSchema}>
                        {({handleChange, handleSubmit, errors}) => (
                            <>
                                <AppTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="email"
                                    keyboardType="email-address"
                                    onChangeText={handleChange("email")}
                                    placeholder="Email"/>
                                <Text style={{color: 'red'}}>{errors.email}</Text>
                                <AppTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="email"
                                    onChangeText={handleChange("password")}
                                    secureTextEntry={true}
                                    placeholder="Password"
                                    />
                                <Text style={{color: 'red'}}>{errors.password}</Text>
                                
                                <AppButton title="Login" onPress={handleSubmit}/>
                    
                            </>
                        )}

                </Formik>
        </AppScreen>

    );
}

const styles = StyleSheet.create( {
    container: {
        padding: 10
    }
})
// state.auth.user

const mapStateToProps = state => ({
    user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    logUserIn: (email, password) => dispatch(logUserIn(email, password))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);