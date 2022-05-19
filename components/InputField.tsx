import React, { useState } from 'react'
import { StyleSheet, TextInput as _TextInput, ViewStyle } from 'react-native'
import Colors from '../constants/Colors'
import cn from 'classnames-react-native'

type TextInputProps = {
    placeholder?: string
    style?: ViewStyle
    multiline?: boolean
}

const TextInput = (props: TextInputProps) => {
    const { placeholder, style, multiline } = props

    const [value, setValue] = useState('')

    return (
        <_TextInput
            placeholder={placeholder}
            placeholderTextColor={'gray'}
            onChangeText={(text) => setValue(text)}
            value={value}
            style={cn(style, styles.container, [styles.multiline, multiline])}
            multiline={multiline}
            textAlignVertical='top'
        />
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
    multiline: {
        height: 150
    }
})

export default TextInput