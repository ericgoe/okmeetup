import React, { useState } from 'react'
import { StyleSheet, TextInput as _TextInput, ViewStyle } from 'react-native'
import colors from '../constants/Colors'

type TextInputProps = {
    placeholder?: string
    style?: ViewStyle
}

const TextInput = (props: TextInputProps) => {
    const { placeholder, style } = props

    const [value, setValue] = useState('')

    return (
        <_TextInput
            placeholder={placeholder}
            placeholderTextColor={'gray'}
            onChangeText={(text) => setValue(text)}
            value={value}
            multiline={true}
            style={[style, styles.container]}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 2,
        borderColor: 'blue',
        borderWidth: 2,
        height: 'auto',
        minHeight: 80, //ToDo: validate
    }
})

export default TextInput