import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { RootStackScreenProps } from '../types'
import React, { useEffect } from 'react'
import * as Calendar from 'expo-calendar'
import Button from '../components/Button'


let screenDimensions = Dimensions.get('screen')

const currentDate = new Date()


const SelectFreeTimeScreen = ({ navigation }: RootStackScreenProps<'SelectFreeTimeScreen'>) => {
	const loadCalendarEvents = async () => {
		await Calendar.getCalendarPermissionsAsync()
		await Calendar.requestCalendarPermissionsAsync()
		const getEvents = await Calendar.getEventsAsync(['6'], new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()), new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, currentDate.getDate()))
		console.log('Events from ' + new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) + 'to ' + new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, currentDate.getDate()))
		console.log(getEvents.map(event => event.title + ' ' + (new Date(event.startDate)).toISOString().slice(0, 10) + ' to ' + (new Date(event.endDate)).toISOString().slice(0, 10)))
	}
	const [calendars, setCalendars] = React.useState<String[]>([])

	const getCalendars = async () => {
		const calendars = await Calendar.getCalendarsAsync()
		const entries = calendars.map(calendar => calendar.title)
		setCalendars(entries)
	}


	useEffect(() => {
		getCalendars()
	})
	const render = calendars.map(entry => <Button onPress={() => console.log(entry)}>{entry}</Button>)
	return (
		<View style={styles.container}>
			<View style={styles.upperContainer}>
				{render}
			</View>
			<View style={styles.lowerContainer}>
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
