import React from 'react'
import {
    StyleProp,
    StyleSheet,
    Text,
    TextInput as _TextInput,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native'
import Colors from '../constants/Colors'

type ButtonProps = {
    children: string
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    onPress: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <TouchableOpacity style={[props.style, styles.button]} onPress={props.onPress}>
            <Text style={[props.textStyle, styles.buttonText]}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        borderRadius: 50,
        paddingVertical: 10
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.text,
    },
})

export default Button
