import { Dimensions, StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import { RootStackScreenProps } from '../types'
import React, { useEffect } from 'react'
import * as Calendar from 'expo-calendar'
import Button from '../components/Button'


let screenDimensions = Dimensions.get('screen')

const currentDate = new Date()


const SelectFreeTimeScreen = ({ navigation }: RootStackScreenProps<'SelectFreeTimeScreen'>) => {

	const [calendars, setCalendars] = React.useState<String[]>([])

	const getCalendars = async () => {
		const calendars = await Calendar.getCalendarsAsync()
		const entries = calendars.map(calendar => calendar.title)
		setCalendars(entries)
	}


	useEffect(() => {
		getCalendars()
	})
	const render = calendars.map(entry => <Button key={entry.toString()} onPress={() => console.log(entry)}>{entry}</Button>)
	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.upperContainer}>
				{render}
			</ScrollView>
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
		Button: {
			height : '20',
		}
	},
)
export default SelectFreeTimeScreen
