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
            console.log(state.cart);

        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter(el => el.id !== action.payload)
        },
        increment: (state, action) => {
            const item = state.cart.find(el => el.id === action.payload)
            if (item) item.number++
        },
        decrement: (state, action) => {
            const item = state.cart.find(el => el.id === action.payload)
            if (item && item.number > 1) item.number--
        },
    }
})

export const cartReducer = cartSlice.reducer
export const { addToCart, deleteFromCart, increment, decrement } = cartSlice.actions

export const selectTotalSum = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.price * item.number, 0);