/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import CustomTheme from '../constants/CustomTheme'
import CreateEventScreen from '../screens/CreateEventScreen'
import ImportCalendarScreen from '../screens/ImportCalendarScreen'
import InviteUsersScreen from '../screens/InviteUsersScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import IntroScreen from '../screens/IntroScreen'
import SelectFreeTimeScreen from '../screens/SelectFreeTimeScreen'
import JoinScreen from '../screens/JoinScreen'
import EventListScreen from '../screens/EventListScreen'
import ShowImportedEventsScreen from '../screens/ShowImportedEventsScreen'
import { Provider } from 'react-redux'
import { store } from '../store/store'

type NavigationProps = {
    colorScheme: ColorSchemeName
}

export default function Navigation(props: NavigationProps) {
    return (
        <Provider store={store}>
            <NavigationContainer
                linking={LinkingConfiguration}
                theme={CustomTheme}
            >
                <RootNavigator />
            </NavigationContainer>
        </Provider>
    )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen name="JoinScreen" component={JoinScreen} />
            <Stack.Screen
                name="ImportCalendarScreen"
                component={ImportCalendarScreen}
            />
            <Stack.Screen
                name="CreateEventScreen"
                component={CreateEventScreen}
            />
            <Stack.Screen name="EventListScreen" component={EventListScreen} />
            <Stack.Screen
                name="InviteUsersScreen"
                component={InviteUsersScreen}
            />
            <Stack.Screen
                name="SelectFreeTimeScreen"
                component={SelectFreeTimeScreen}
            />
            <Stack.Screen
                name="ShowImportedEventsScreen"
                component={ShowImportedEventsScreen}
            />
            <Stack.Screen
                name="Root"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
        </Stack.Navigator>
    )
}
