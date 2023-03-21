import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../reduxStore";
import type {IProduct} from '../../types/product'

interface stateType {
    products:IProduct[],
    filter:number|null
    activeProduct:IProduct|null
    pagination: {limit:number , allPages:number , page:number}
    error:{flag:boolean , text:string}
}
const initialState: stateType = {
    products:[],
    filter:null,
    activeProduct:null,
    pagination: {limit:12 , allPages:0 , page:0},
    error:{flag:false , text:''}
}

export const slice = createSlice({
    name: 'direction',
    initialState,
    reducers: {
        setProductsAction: (state, action: PayloadAction<IProduct[]>) : void => {
            state.products = action.payload
            state.pagination.allPages = Math.ceil(action.payload.length/state.pagination.limit)
        },
        setProductAction: (state, action: PayloadAction<IProduct|null>) : void => {
            state.activeProduct = action.payload
        },
        setFilterAction: (state, action: PayloadAction<number|null>) : void => {
            state.filter = action.payload
        },
        clearProductAction: (state) : void => {
            state.activeProduct = null
        },
        setErrorAction: (state, action: PayloadAction<{flag:boolean , text:string}>) : void => {
            state.error = action.payload
        },
        clearErrorAction: (state) : void => {
            state.error = {flag:false , text:''}
        },

        setPageAction: (state, action: PayloadAction<number>) : void => {
            state.pagination.page = action.payload
        },

    }
})

export const ProductReducer = slice.reducer
export const ProductActions = slice.actions
export const ProductState = (state: RootState) => state.ProductReducer


