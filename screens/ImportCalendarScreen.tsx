import React from 'react'
import { Text, Button, Image} from "react-native"

const ImportCalendarScreen = () => {
    return (
        <Text>
            <Image source={require('../assets/images/calendar-icon.png')} />
            Importiere deinen Kalender, damit wir deine freien Zeiten eintragen können.
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
        </Text>
        
    )
}

const importCalendar = () => {
    console.log("import Calendar");
}

const enterFreeTimeManually = () => {
    console.log("enterFreeTimeManually");
}

export default ImportCalendarScreen