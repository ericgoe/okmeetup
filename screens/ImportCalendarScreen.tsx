import React from 'react'
import { StyleSheet, Text, Button, Image, View } from "react-native"
import { Dimensions } from 'react-native'

const screenSize = Dimensions.get('screen');

const ImportCalendarScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>

                <Image source={require('../assets/images/calendar-icon.png')} />
                <Text>
                    Importiere deinen Kalender, damit wir deine freien Zeiten eintragen können.
                </Text>
            </View>
            <View style={styles.lowerContainer}>
                <Button 
                    onPress={importCalendar}
                    title="Kalender importieren"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={enterFreeTimeManually}
                    title="oder manuell eintragen"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>

        </View>
    )
}

const importCalendar = () => {
    console.log("import Calendar");
}

const enterFreeTimeManually = () => {
    console.log("enterFreeTimeManually");
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'blue'
    },

    upperContainer: {
        marginVertical: "15%",
        height: "50%",
        width: "100%",
        justifySelf: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },

    lowerContainer: {
        marginBottom: "15%",
        height: "20%",
        width: "100%",
        position: 'relative',
        alignself: 'end',
        justifyContent: 'space-around',
        backgroundColor: 'yellow'
    },

    text: {
        color: 'green'
    },

    button: {
        margin: '3%'
    }
})

export default ImportCalendarScreen