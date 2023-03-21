import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../reduxStore";

interface stateType {
    language: 'Ru' | 'En'
}
const initialState: stateType = {
    language: 'Ru'
}

export const slice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguageAction: (state, action: PayloadAction<'Ru' | 'En'>) : void => {
            state.language = action.payload
        },
    }
})

export const LanguageReducer = slice.reducer
export const LanguageActions = slice.actions
export const LanguageState = (state: RootState) => state.LanguageReducer


