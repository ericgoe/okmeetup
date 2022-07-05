/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    InviteUsersScreen: undefined
    JoinScreen: undefined
    ImportCalendarScreen: undefined
    IntroScreen: undefined
    EventListScreen: undefined
    CreateEventScreen: undefined
    Root: NavigatorScreenParams<RootTabParamList> | undefined
    Modal: undefined
    NotFound: undefined
    SelectFreeTimeScreen: undefined
    ShowImportedEventsScreen: string[]
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
    TabOne: undefined
    TabTwo: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>
    >
