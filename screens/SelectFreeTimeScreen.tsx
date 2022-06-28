import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from '../components/Text'
import { RootStackScreenProps } from '../types'
import React from 'react'
import Button from '../components/Button'
import * as Calendar from 'expo-calendar'
import { requestCalendarPermissionsAsync } from 'expo-calendar'


let screenDimensions = Dimensions.get('screen')

const currentDate = new Date()

const loadCalendarEvents = async () => {
	await Calendar.getCalendarPermissionsAsync()
	await Calendar.requestCalendarPermissionsAsync()
	await Calendar.getCalendarsAsync()
	const getEvents = await Calendar.getEventsAsync(['6'], new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()), new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, currentDate.getDate()))
	console.log('Events from ' + new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) + 'to ' + new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, currentDate.getDate()))
	console.log(getEvents.map(event => event.title + ' ' + (new Date(event.startDate)).toISOString().slice(0, 10) + ' to ' + (new Date(event.endDate)).toISOString().slice(0, 10)))
}

const SelectFreeTimeScreen = ({ navigation }: RootStackScreenProps<'SelectFreeTimeScreen'>) => {
	loadCalendarEvents()
	return (
		<View style={styles.container}>
			<View style={styles.upperContainer}>

			</View>
			<View style={styles.lowerContainer}>
				<Button onPress={console.log}>Neue freie Zeit eintragen</Button>
				<Button onPress={console.log}>Bestätigen</Button>
			</View>
		</View>
	)
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
	},
)
export default SelectFreeTimeScreen
