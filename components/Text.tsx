import React from 'react'
import {
    StyleSheet,
    Text as DefaultText,
} from 'react-native'

import Colors from '../constants/Colors';

const Text = (props: DefaultText['props']) => {
    const { style, ...otherProps } = props;

    return <DefaultText style={[styles.text, style || {}]} {...otherProps} />;
}

const styles = StyleSheet.create({
    text: {
        color: Colors.text,
        fontFamily: 'cantarell-regular'
    },
})

export default Text