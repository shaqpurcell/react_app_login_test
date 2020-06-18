/* 
 FILENAME:		Button.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			18-June-2020 
 DESCRIPTION:	Pretty version of a basic button. Used in generic buttons spots around application
 */

import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import COLOURS from '../res/colours';

function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLOURS.button.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    text: {
        color: COLOURS.button.secondary,
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default AppButton;