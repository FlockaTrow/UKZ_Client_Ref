import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { LanguageReducer } from './reducers/language'
import { DirectionReducer } from './reducers/direction'
import { ProductReducer } from './reducers/product'

const rootReducer = combineReducers({
    LanguageReducer,
    DirectionReducer,
    ProductReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppState: TypedUseSelectorHook<RootState> = useSelector
