import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RootStackScreenProps } from '../types'
import { Dimensions } from 'react-native'
import Colors from '../constants/Colors'
import EventCodeInput from '../components/EventCodeInput'
import LoadingOverlay from '../components/LoadingOverlay'

const screenDimensions = Dimensions.get('screen')

const IntroScreen = ({ navigation }: RootStackScreenProps<'JoinScreen'>) => {
    const [isLoading, setLoading] = useState(false)
    const processEventCode = (code: string) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigation.navigate('ImportCalendarScreen')
        }, 1500)
    }

    return (
        <View style={styles.mainContainer}>
            <LoadingOverlay
                show={isLoading}
            />
            <View style={styles.upperContainer}>
                <Text style={styles.header}>
                    Wie lautet der 6-stellige Code des Events?
                </Text>
                <Text style={styles.description}>
                    Der Code ist eine Kombination von 6 Zahlen oder Namen.
                    Die erstellende Person des Events sollte den Code haben.
                </Text>
            </View>
            <View style={styles.lowerContainer}>
                <EventCodeInput
                    onSelect={processEventCode}
                ></EventCodeInput>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: screenDimensions.width,
        height: screenDimensions.height,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    },
    upperContainer: {
        marginTop: '20%',
        marginLeft: '10%',
        marginRight: '10%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'cantarell-regular',
        color: Colors.primary,
        textAlign: 'left',

    },
    description: {
        marginTop: 10,
        fontSize: 16,
        fontFamily: 'cantarell-regular',
        color: Colors.text,
        textAlign: 'left',
    },
    lowerContainer: {
        marginTop: '20%',
        position: 'relative',
        justifyContent: 'space-around',
    },
    input: {
        color: 'grey',
    },
})

export default IntroScreen