import React, { useState } from 'react'
import { StyleSheet, Text, TextInput as _TextInput, TouchableOpacity, ViewStyle } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTime } from 'luxon'

type DatePickerProps = {
    placeholder?: string
    style?: ViewStyle
}

const DatePicker = (props: DatePickerProps) => {
    const { placeholder, style } = props

    const [date, setDate] = useState<Date | undefined>(undefined)
    const [isDateOpened, setDateOpenState] = useState(false)

    //const dateString = date ? DateTime.fromJSDate(date).toFormat('dd.MM.yyyy') : undefined
    const dateString = undefined

    return (
        <TouchableOpacity
            onPress={() => setDateOpenState(true)}
            style={[style, styles.container]}
        >
            <Text
                style={{ color: dateString ? 'black' : 'grey' }}
            >
                {placeholder} {dateString}
            </Text>
            <DateTimePicker
                testID="dateTimePicker"
                value={date || new Date()}
                textColor='blue'
                mode={'date'}
                is24Hour={true}
                onChange={(evt) => {
                    if (evt.type === 'set') {
                        console.log(evt.nativeEvent)
                        //evt.nativeEvent.timestamp && setDate(new Date(evt.nativeEvent.timestamp))
                    }
                }}

            />
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 2,
        borderColor: 'blue',
        borderWidth: 2,
    },
    placeholder: {
        color: 'gray'
    }
})

export default DatePicker