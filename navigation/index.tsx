/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CreateEventScreen from '../screens/CreateEventScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


type NavigationProps = {
	colorScheme: ColorSchemeName
}

export default function Navigation(props: NavigationProps) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={CustomTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()
function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} >
			<Stack.Screen name='IntroScreen' component={IntroScreen} />
			<Stack.Screen name='CreateEventScreen' component={CreateEventScreen} />
			<Stack.Screen name='Root' component={NotFoundScreen} options={{ title: 'Oops!' }} />
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name='Modal' component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	)
}
