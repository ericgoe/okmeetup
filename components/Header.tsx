import React from 'react'
import {
    StyleProp,
    StyleSheet,
    Text,
    TextInput as _TextInput,
    TextStyle,
} from 'react-native'
import colors from '../constants/Colors'

type HeaderProps = {
    children: string
    textStyle?: StyleProp<TextStyle>
}

const Header = (props: HeaderProps) => {
    return (
        <Text style={[props.textStyle, styles.header]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        textcolor: colors.text,
        fontFamily: 'cantarell-bold'
    },
})

export default Header