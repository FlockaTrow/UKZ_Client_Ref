import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../reduxStore";
import type {IDirection} from '../../types/direction'

interface stateType {
    directions:IDirection[]|null,
    error:{flag:boolean , text:string}
}
const initialState: stateType = {
    directions:null,
    error:{flag:false , text:''}
}

export const slice = createSlice({
    name: 'direction',
    initialState,
    reducers: {
        setDirectionsAction: (state, action: PayloadAction<IDirection[]|null>) : void => {
            state.directions = action.payload
        },
        setErrorAction: (state, action: PayloadAction<{flag:boolean , text:string}>) : void => {
            state.error = action.payload
        },
        clearErrorAction: (state) : void => {
            state.error = {flag:false , text:''}
        },
    }
})

export const DirectionReducer = slice.reducer
export const DirectionActions = slice.actions
export const DirectionState = (state: RootState) => state.DirectionReducer


