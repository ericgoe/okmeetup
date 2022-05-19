import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Text from '../components/Text';

const InviteUsersScreen = () => {
    return (
        <View>
            <View>
                <Text>Herzlichen Glückwunsch! Du hast erfolgreich
                    ein Event erstellt</Text>
                <Text>Um Teilnehmer einladen zu können musst du den 6-stelligen Code mit den Teilnehmern teilen.</Text>
                <Text>Der 6-stellige Code:</Text>
                <Text>xL33Tx</Text>
            </View>
            <View>
                <Button onPress={shareCode}>Code teilen</Button>
            </View>
        </View>
    )
}

const shareCode = () => {
    console.log("share Code");
}

const styles = StyleSheet.create({

})

export default InviteUsersScreen;
