import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, Pressable } from 'react-native'
import { RootStackScreenProps } from '../types'
import { Dimensions } from 'react-native'
import EventCodeInput from '../components/EventCodeInput'


const IntroScreen = ({ navigation }: RootStackScreenProps<'JoinScreen'>) => {
	return (
        <View style={styles.container}>
            <View style={styles.header}>

            </View>        
            <View style={styles.description}>

            </View>        
            <View style={styles.input}>
                <EventCodeInput></EventCodeInput>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {

    },
    header: {

    },
    description: {

    },
    input: {

    },
})