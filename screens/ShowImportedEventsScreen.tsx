import { View, Text } from 'react-native'
import { RootStackParamList, RootStackScreenProps } from '../types'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { Calendar, getEventsAsync } from 'expo-calendar'

const ShowImportedEventsScreen = ({ navigation }: RootStackScreenProps<'ShowImportedEventsScreen'>) => {
	const params: RootStackParamList['ShowImportedEventsScreen'] = useRoute().params as RootStackParamList['ShowImportedEventsScreen']
	const [events, setEvents] = React.useState<String[]>([])
	const getEvents = async () => {
		const currentDate = new Date()
		const start = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
		const end = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, currentDate.getDate())
		const event = await getEventsAsync(params, new Date(start), new Date(end))
		setEvents(event)

	}



		useEffect(() => {
			getEvents()
		})

	return (
		<View>
			<Text>

			</Text>
		</View>
	)
}
export default ShowImportedEventsScreen
