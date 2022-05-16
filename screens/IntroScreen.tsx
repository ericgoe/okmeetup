import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, Pressable } from 'react-native'
import EditScreenInfo from '../components/EditScreenInfo'
import { RootStackScreenProps } from '../types'
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen')

const IntroScreen = ({ navigation }: RootStackScreenProps<'IntroScreen'>) => {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/images/logo.png')} />
			</View>
			<View style={styles.buttonContainer}>
				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Erstellen</Text>
				</Pressable>
				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Beitreten</Text>
				</Pressable>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					Deine <Text style={styles.textHighlight}>Daten</Text> gehören dir!
				</Text>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#393942',
	},
	logoContainer: {
		marginTop: '30%',
	},
	logo: {
		resizeMode: 'contain',
		width: screenWidth.width - 40,
		height: screenWidth.height / 4,
	},
	buttonContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		marginTop: '50%',
		marginBottom: '10%',
	},
	button: {
		flex: 1,
		width: screenWidth.width - 40,
		maxHeight: screenWidth.height / 14,
		backgroundColor: '#0284a5',
		margin: 10,
		justifyContent: 'center',
		borderRadius: 50,
	},
	buttonText: {
		fontSize: 20,
		textAlign: 'center',
		color: 'white',
	},
	textContainer: {
		marginTop: '10%',
	},
	text: {
		fontSize: 15,
		color: '#fff',
	},
	textHighlight: {
		color: '#0284a5',
	},
})

export default IntroScreen
