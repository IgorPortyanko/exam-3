import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = state.cart.find(el => el.id === action.payload.id)
            !newItem ? state.cart.push({ ...action.payload, number: 1 }) : newItem.number++
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter(el => el.id !== action.payload.id)
        },
        increment: (state, action) => {
            const item = state.cart.find(el => el.id === action.payload.id)
            item.number++
        },
        decrement: (state, action) => {
            const item = state.cart.find(el => el.id === action.payload.id)
            (item.number > 2) && item.number-- 
        }
    }
})

export const cartReducer = cartSlice.reducer