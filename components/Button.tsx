import React from 'react'
import { Dimensions } from 'react-native'


const screenWidth = Dimensions.get('screen');

import {
    StyleProp,
    StyleSheet,
    TextInput as _TextInput,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native'
import Colors from '../constants/Colors'
import Text from './Text'

type ButtonProps = {
    children: String
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
        flex: 1,
        width: screenWidth.width - 40,
        maxHeight: screenWidth.height / 14,
        backgroundColor: '#0284a5',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.text,
    },
})

export default Button
