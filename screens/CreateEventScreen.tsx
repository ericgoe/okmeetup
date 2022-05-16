import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from '../components/DatePicker'
import TextInput from '../components/InputField'

const CreateEventScreen = () => {
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
        >
            <View>
                <Text>Event Erstellen</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Titel"
                />
                <TextInput
                    placeholder='Beschreibung'
                />
            </View>
            <View>
                <Text>Zeitraum festlegen</Text>
                <DatePicker
                    placeholder='Frühestend startend am'
                    style={styles.inputField}
                />
                <DatePicker
                    placeholder='Spätestens bis zum'
                />
            </View>

            <Text>
                Absenden
            </Text>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'space-around',
        width: '90%',
        alignSelf: 'center'
    },
    inputField: {
        marginVertical: 25
    }
})


export default CreateEventScreen