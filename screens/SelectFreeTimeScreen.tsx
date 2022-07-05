import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { RootStackParamList, RootStackScreenProps } from '../types'
import React, { useEffect } from 'react'
import * as Calendar from 'expo-calendar'
import Button from '../components/Button'
import colors from '../constants/Colors'
import Colors from '../constants/Colors'


const SelectFreeTimeScreen = ({ navigation }: RootStackScreenProps<'SelectFreeTimeScreen'>) => {
	const [calendars, setCalendars] = React.useState<Calendar.Calendar[]>([])
	const [selectedIds, setSelectedIds] = React.useState<string[]>([])

	const getCalendars = async () => {
		const calendars = await Calendar.getCalendarsAsync()
		setCalendars(calendars)
	}

	const selectCalendar = async (id: string) => {
		if (selectedIds.includes(id)) {
			setSelectedIds(selectedIds.filter(i => i !== id))
		} else {
			setSelectedIds([...selectedIds, id])
		}
	}

	const getSelectedCalendars = () => {
		navigation.navigate('ShowImportedEventsScreen', selectedIds)
		return calendars.filter(c => selectedIds.includes(c.id))
	}

	useEffect(() => {
		getCalendars().then(r => console.log(r))
	}, [])

	const render = calendars.map(entry => {
		const isSelected = selectedIds.includes(entry.id)
		return (
			<Button style={[styles.button, isSelected ? styles.selectedButton : styles.unselectedButton]} key={entry.id}
					onPress={() => selectCalendar(entry.id)}>{entry.title}</Button>)
	})

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.text}>
				Wähle deinen Kalender aus.
			</Text>
			<View style={styles.content}>
				{render}
				<View style={styles.buttonContainer}>
					<Button style={styles.button}
							onPress={() => getSelectedCalendars()}>Importieren</Button>
				</View>
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

		content: {
			height: '100%',
			marginTop: '10%',
		},

		lowerContainer: {
			marginTop: '20%',
			position: 'relative',
			justifyContent: 'space-between',
		},

		unselectedButton: {
			backgroundColor: colors.gray,
		},

		selectedButton: {
			backgroundColor: colors.primary,
		},
		button: {
			height: 100,
		},
		buttonContainer: {
			marginTop: '10%',
		},
	},
)
export default SelectFreeTimeScreen
