import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

export const setParticipant = createAction<string>('setParticipantId')

export type DefaultState = {
    participantId: string | undefined
}

const initialState = {
    participantId: undefined,
}

const reducer = createReducer<DefaultState>(initialState, (builder) =>
    builder.addCase(setParticipant, (state, action) => ({
        ...state,
        participantId: action.payload,
    })),
)

let store = configureStore({
    reducer: reducer,
})

export { store }
