import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput as _TextInput, TouchableOpacity, ViewStyle } from 'react-native'
import {Dimensions} from 'react-native';
const screen = Dimensions.get('screen');


const Button = () => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Erstellen</Text>
        </Pressable>
    )
 }

 const styles = StyleSheet.create({
	button: {
		flex: 1,
		width: screen.width - 40,
		maxHeight: screen.height / 14,
		backgroundColor: '#0284a5',
		margin: 10,
		justifyContent: 'center',
		borderRadius: 50,
	},
	buttonText: {
		fontSize: 20,
		textAlign: 'center',
		color: 'white',
	}
})

export default Button;