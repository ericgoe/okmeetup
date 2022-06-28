import { useRoute } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Text from '../components/Text'
import Colors from '../constants/Colors'
import { RootStackParamList } from '../types'

type Event = {
    name: string
    date: string
    time: string
}

export type EventListScreenProps = {
    events: Event[]
}

const EventListScreen = () => {
    const params: RootStackParamList['EventListScreen'] = useRoute().params as RootStackParamList['EventListScreen']

    const events = params.events.map((event, idx) => (
        <View
            key={idx}
            style={styles.event}
        >
            <Text
                style={{ ...styles.text, ...styles.header }}
            >
                {event.name}
            </Text>
            <View
                style={styles.eventTimes}
            >
                <Text
                    style={styles.text}
                >
                    {event.date}
                </Text>
                <Text
                    style={styles.text}
                >
                    {event.time}
                </Text>
            </View>

        </View >
    ))

    return (
        <View
            style={styles.container}
        >
            <Header>
                Events
            </Header>
            <ScrollView
                contentContainerStyle={styles.eventContainer}
            >
                {events}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        marginTop: 50
    },
    eventContainer: {
        alignItems: 'center'
    },
    event: {
        backgroundColor: Colors.gray,
        width: '80%',
        marginVertical: 10,
        borderRadius: 20,
        padding: 15
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
        justifyContent: 'space-between'
    },
    text: {
        color: Colors.background,
    },
    inputField: {
        marginVertical: 25,
    },
})

export default EventListScreen
