import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Button from '../components/Button'
import DatePicker from '../components/DatePicker'
import TextInput from '../components/InputField'
import Text from '../components/Text'
import Colors from '../constants/Colors'

const CreateEventScreen = () => {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.text}>Event Erstellen</Text>
                <TextInput style={styles.inputField} placeholder="Titel" />
                <TextInput multiline={true} placeholder="Beschreibung" />
            </View>
            <View>
                <Text style={styles.text}>Zeitraum festlegen</Text>
                <DatePicker
                    placeholder="Frühestend startend am"
                    style={styles.inputField}
                    id="1"
                />
                <DatePicker placeholder="Spätestens bis zum" id="2" />
            </View>

            <Button
                onPress={() => {
                    Alert.alert('navigate to \'InviteUserScreen\'')
                }}
            >Absenden</Button>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'space-around',
        width: '90%',
        alignSelf: 'center',
    },
    text: {
        color: Colors.text,
    },
    inputField: {
        marginVertical: 25,
    },
})

export default CreateEventScreen
