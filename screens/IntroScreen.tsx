import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Pressable } from 'react-native'
import { RootStackScreenProps } from '../types'
import { Dimensions } from 'react-native'
import Button from '../components/Button'
import Colors from '../constants/Colors'

const screenWidth = Dimensions.get('screen')

const IntroScreen = ({ navigation }: RootStackScreenProps<'IntroScreen'>) => {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/images/logo.png')} />
			</View>
			<View style={styles.buttonContainer}>
				<Button onPress={() => navigation.navigate('CreateEventScreen')}>Erstellen</Button>
				<Button onPress={() => navigation.navigate('ImportCalendarScreen')}>Beitreten</Button>
				<Button onPress={() => navigation.navigate('ImportCalendarScreen')}>Deine Events</Button>
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
		marginTop: '40%',
		marginBottom: '10%',
		justifyContent: 'space-between',
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
