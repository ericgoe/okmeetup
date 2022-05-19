import React, { useState } from 'react'
import {
    Alert,
    Platform,
    StyleSheet,
    TextInput as _TextInput,
    TouchableOpacity,
    ViewStyle,
} from 'react-native'
import Colors from '../constants/Colors'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { DateTime } from 'luxon'
import Text from './Text'

type DatePickerProps = {
    placeholder?: string
    style?: ViewStyle
    id: string
}

const DatePicker = (props: DatePickerProps) => {
    const { placeholder, style } = props

    const [date, setDate] = useState<Date | undefined>(undefined)

    const dateString = date ? DateTime.fromJSDate(date).toFormat('dd.MM.yyyy') : undefined

    const openDateTimePicker = () => {
        if (Platform.OS !== 'android') {
            Alert.alert('DateTimePicker is not supported on iOS.')
            return
        }
        DateTimePickerAndroid.open({
            nativeID: props.id,
            value: date || new Date(),
            mode: 'date',
            onChange: (evt) => {
                if (evt.type === 'set') {
                    console.log(evt.nativeEvent)
                    evt.nativeEvent.timestamp &&
                        setDate(new Date(evt.nativeEvent.timestamp))
                }

            }
        })
    }

    return (
        <TouchableOpacity
            onPress={openDateTimePicker}
            style={[style, styles.container]}
        >
            <Text
                style={{ color: dateString ? 'black' : 'grey' }}
            >
                {placeholder} {dateString}
            </Text>

        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.gray,
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 2,
        borderColor: Colors.primary,
        borderWidth: 2,
    },
})

export default DatePicker
