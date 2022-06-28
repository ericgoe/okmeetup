import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Button from '../components/Button';
import Text from '../components/Text';
import { Dimensions } from 'react-native'
import Colors from '../constants/Colors';

const screenDimensions = Dimensions.get('screen')


const InviteUsersScreen = () => {
    return (
        <View style = {styles.screen}>
            <View style = {styles.upperContainer}>
                <Text style = {styles.congratulationText}>Herzlichen Glückwunsch! Du hast erfolgreich
                    ein Event erstellt</Text>
                <Text style = {styles.text}>Um Teilnehmer einladen zu können musst du den 6-stelligen Code mit den Teilnehmern teilen.</Text>
                <Text>Der 6-stellige Code:</Text>
                <Text>xL33Tx</Text>
            </View>
            <View style = {styles.lowerContainer}>
                <Button onPress={shareCode}>Code teilen</Button>
            </View>
        </View>
    )
}

const shareCode = () => {
    console.log("share Code");
}

const styles = StyleSheet.create({
    screen: {
        width: screenDimensions.width,
        height: screenDimensions.height,
        backgroundColor: '#ff0000',
        flexDirection: 'column',
    },

    upperContainer:{
        backgroundColor: Colors.primary,
        margin: '10%',
        marginTop: 100,
    },

    lowerContainer:{
        backgroundColor: '#000000',
        height: 100,
        margin: '5.5%',
        justifyContent: 'center',
        alignContent: 'center',
    },

    text:{
        textAlign: 'justify',
        marginTop: '10%',
        marginBottom: '10%',
    },

    congratulationText:{
        textAlign: 'center',
        marginTop: '10%',
        fontSize: 20,
    }
})

export default InviteUsersScreen;
