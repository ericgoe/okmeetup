import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import Text from '../components/Text'
import Colors from '../constants/Colors'
import { Dimensions } from 'react-native'

const screenDimensions = Dimensions.get('screen')


const ImportCalendarScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.upperContainer}>
				<Image source={require('../assets/images/calendar-icon.png')} />
				<Text style={styles.text}>
					Importiere deinen Kalender, damit wir deine freien Zeiten eintragen können.
				</Text>
			</View>
			<View style={styles.lowerContainer}>
				<Button onPress={importCalendar}>Kalender importieren</Button>
				<TouchableOpacity onPress={enterFreeTimeManually}>
					<Text style={styles.clickableText}>oder manuell eintragen</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const importCalendar = () => {
	console.log('import Calendar')
}

const enterFreeTimeManually = () => {
	console.log('enterFreeTimeManually')
}

const styles = StyleSheet.create({
	container: {
		width: screenDimensions.width,
		height: screenDimensions.height,
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'center',
	},

	upperContainer: {
		marginTop: '20%',
		justifyContent: 'space-around',
		justifySelf: 'center',
		alignItems: 'center',
	},

	lowerContainer: {
		marginTop: '20%',
		position: 'relative',
		justifyContent: 'space-between',
	},

	text: {
		textAlign: 'center',
		marginTop: '10%',
	},

	clickableText: {
		fontSize: 20,
		fontFamily: 'cantarell-regular',
		color: Colors.primary,
		textAlign: 'center',
		textDecorationLine: 'underline',
	},

})

export default ImportCalendarScreen
