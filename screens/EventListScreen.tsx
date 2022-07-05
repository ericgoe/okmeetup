import { DateTime } from 'luxon'
import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { API, fetchEvents } from '../api/api'
import Button from '../components/Button'
import Header from '../components/Header'
import Text from '../components/Text'
import Colors from '../constants/Colors'
import { DefaultState } from '../store/store'

const EventListScreen = () => {
    const [eventData, setEventData] = useState<API.Event[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const participantId = useSelector(
        (state: DefaultState) => state.participantId,
    ) as string

    const reloadEventData = async () => {
        setIsLoading(true)
        const eventData = await fetchEvents(participantId)
        setEventData(eventData)
        setIsLoading(false)
    }

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true)
            const eventData = await fetchEvents(participantId)
            setEventData(eventData)
            setIsLoading(false)
        }

        fetch()
    }, [])

    const events = eventData.map((event, idx) => {
        let date: string | null = null
        let time: string | null = null

        if (event.decidedTime) {
            date = DateTime.fromJSDate(event.decidedTime).toFormat('dd.mm.yyyy')
            time = DateTime.fromJSDate(event.decidedTime).toFormat('HH:mm')
        }

        return (
            <View key={idx} style={styles.event}>
                <Text style={{ ...styles.text, ...styles.header }}>
                    {event.title}
                </Text>
                {event.decidedTime ? (
                    <View style={styles.eventTimes}>
                        <Text style={styles.text}>{date}</Text>
                        <Text style={styles.text}>{time}</Text>
                    </View>
                ) : (
                    <Button
                        style={styles.button}
                        onPress={() => console.log('decide now')}
                    >
                        Termin jetzt automatisch entscheiden
                    </Button>
                )}
            </View>
        )
    })

    return (
        <View style={styles.container}>
            <Header>Events</Header>
            <ScrollView
                contentContainerStyle={styles.eventContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={reloadEventData}
                    />
                }
            >
                {events}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '85%',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 25,
    },
    container: {
        height: '100%',
        width: '100%',
        marginTop: 50,
    },
    eventContainer: {
        alignItems: 'center',
    },
    event: {
        backgroundColor: Colors.gray,
        width: '80%',
        marginVertical: 10,
        borderRadius: 20,
        padding: 15,
    },
    header: {
        alignSelf: 'center',
        fontSize: 17,
    },
    eventTimes: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 15,
        borderColor: Colors.background,
        borderTopWidth: 1,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: Colors.background,
    },
    inputField: {
        marginVertical: 25,
    },
})

export default EventListScreen
