/* 
 FILENAME:		AppTextInput.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			18-June-2020 
 DESCRIPTION:	Pretty version of TextInput, use around application for geneic text input
 */

import React from 'react'
import { View, TextInput, StyleSheet, Platform} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import COLOURS from '../res/colours'

function AppTextInput ({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={COLOURS.textInput.tertiary} style={styles.icon}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOURS.textInput.primary,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },

    textInput: {
        color: COLOURS.textInput.secondary,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },

    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;