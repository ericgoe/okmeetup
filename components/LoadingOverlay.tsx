import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'

type LoadingOverlayProps = {
    show: boolean
}

const LoadingOverlay = (props: LoadingOverlayProps) => {
    if (!props.show) return null
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color={Colors.primary}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 100,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default LoadingOverlay
