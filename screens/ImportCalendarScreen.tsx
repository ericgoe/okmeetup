import React, { useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from "react-native"
import Button from '../components/Button';
import LoadingOverlay from '../components/LoadingOverlay';
import Text from '../components/Text';
import Colors from '../constants/Colors';

const ImportCalendarScreen = () => {
    const [isLoading, setLoading] = useState(false)

    const importCalendar = () => {
        console.log("import Calendar");
        setLoading(true)
        setTimeout(() => { setLoading(false) }, 1500)
    }

    const enterFreeTimeManually = () => {
        console.log("enterFreeTimeManually");
    }

    return (
        <View style={styles.container}>
            <LoadingOverlay show={isLoading} />
            <View style={styles.upperContainer}>
                <Image source={require('../assets/images/calendar-icon.png')} />
                <Text style={styles.text}>
                    Importiere deinen Kalender, damit wir deine freien Zeiten eintragen können.
                </Text>
            </View>
            <View style={styles.lowerContainer}>
                <Button onPress={importCalendar}>Kalender importieren</Button>
                <TouchableOpacity onPress={enterFreeTimeManually}>
                    <Text style={styles.clickableText}>oder manuell eintragen</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },

    upperContainer: {
        marginVertical: "5%",
        height: "60%",
        width: "100%",
        justifyContent: 'space-around',
        justifySelf: 'center',
        alignItems: 'center',
    },

    lowerContainer: {
        marginBottom: "10%",
        height: "22.5%",
        width: "80%",
        position: 'relative',
        alignself: 'end',
        justifyContent: 'space-around',
    },

    text: {
        textAlign: 'center',
    },

    clickableText: {
        fontSize: 20,
        fontFamily: 'cantarell-regular',
        color: Colors.primary,
        textAlign: 'center',
        textDecorationLine: 'underline',
    }

})

export default ImportCalendarScreen
