import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { RootStackParamList, RootStackScreenProps } from '../types'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { getEventsAsync } from 'expo-calendar'
import * as Calendar from 'expo-calendar'
import Colors from '../constants/Colors'
import { DateTime } from 'luxon'
import Button from '../components/Button'
import colors from '../constants/Colors'

const ShowImportedEventsScreen = ({ navigation }: RootStackScreenProps<'ShowImportedEventsScreen'>) => {
	const params: RootStackParamList['ShowImportedEventsScreen'] = useRoute().params as RootStackParamList['ShowImportedEventsScreen']
	const [events, setEvents] = React.useState<Calendar.Event[]>([])
	const [selectedIds, setSelectedIds] = React.useState<string[]>([])

	const getEvents = async (): Promise<void> => {

		const start = new Date(DateTime.local().minus({ days: 1 }).toJSDate())
		const end = new Date(DateTime.local().plus({ days: 60 }).toJSDate())
		const events = await getEventsAsync(params, new Date(start), new Date(end))
		setEvents(events)
	}

	const selectEvents = async (id: string) => {
		if (selectedIds.includes(id)) {
			setSelectedIds(selectedIds.filter(i => i !== id))
		} else {
			setSelectedIds([...selectedIds, id])
		}
	}

	const getUnselectedEvents = () => {
		console.log(selectedIds)
	}

	const render = events.map((entry, idx) => {
		const isSelected = selectedIds.includes(entry.id)
		return (
			<Button key={idx} style={[styles.button, isSelected ? styles.unselectedButton : styles.selectedButton]}
					onPress={() => selectEvents(entry.id)}>
				{entry.title + '\n' + DateTime.fromISO(entry.startDate.toString()).setLocale('de').toFormat('dd.MM.yyyy HH:mm') + ' bis ' + '\n' + DateTime.fromISO(entry.endDate.toString()).setLocale('de').toFormat('dd.MM.yyyy HH:mm')}</Button>
		)
	})


	useEffect(() => {
		getEvents().then(() => console.log(events))

	}, [])

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{render}
			<View style={styles.buttonContainer}>
				<Button onPress={() => getUnselectedEvents()}>Bestätigen</Button>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'center',
		paddingTop: '20%',

	},
	text: {
		color: Colors.text,

	},
	button: {
		maxHeight: '15%',
		padding: '3%',
	},
	unselectedButton: {
		backgroundColor: colors.gray,
	},

	selectedButton: {
		backgroundColor: colors.primary,
	},
	buttonContainer: {
		marginTop: '10%',
		marginBottom: '10%',
	},
})
export default ShowImportedEventsScreen
