import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { RootStackScreenProps } from '../types'
import { Dimensions } from 'react-native'
import Button from '../components/Button'
import { EventListScreenProps } from './EventListScreen'

const dummyProps: EventListScreenProps = {
    events: [
        {
            name: 'Tennis spielen mit den Jungs',
            date: '1.1.2022',
            time: '12:00',
        },
        {
            name: 'Volleyball',
            date: '27.6.2022',
            time: '12:00',
        },
        {
            name: 'Nationalfeiertag',
            date: '23.6.2022',
            time: '12:00',
        }
    ]
}

const screenWidth = Dimensions.get('screen')

const IntroScreen = ({ navigation }: RootStackScreenProps<'IntroScreen'>) => {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../assets/images/logo.png')} />
			</View>
			<View style={styles.buttonContainer}>
				<Button onPress={() => navigation.navigate('CreateEventScreen')}>Erstellen</Button>
				<Button onPress={() => navigation.navigate('JoinScreen')}>Beitreten</Button>
                <Button onPress={() => navigation.navigate('EventListScreen', dummyProps)}>Deine Events</Button>
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
        marginTop: '20%',
    },
    logo: {
        resizeMode: 'contain',
        width: screenWidth.width - 40,
        height: screenWidth.height / 4,
    },
    buttonContainer: {
        flexDirection: 'column',
        marginTop: '20%',
        justifyContent: 'space-between',
    },
    textContainer: {
        marginTop: '20%',
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
