import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const addCartToLocalStorage = (state) => {
    const jsonCart = JSON.stringify(state.cart)
    localStorage.setItem('cartList', jsonCart)
}

export const getCartFromLocalStorage = () => {
    const cartFromLS = localStorage.getItem('cartList')
    if (cartFromLS) {
        return  JSON.parse(cartFromLS)
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        initializeCart: (state, action) => {
            state.cart = action.payload
        },
        addToCart: (state, action) => {
            const newItem = state.cart.find(el => el.id === action.payload.id)
            !newItem ? state.cart.push({ ...action.payload, number: 1 }) : newItem.number++
            addCartToLocalStorage(state)
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter(el => el.id !== action.payload)
            addCartToLocalStorage(state)
        },
        increment: (state, action) => {
            const item = state.cart.find(el => el.id === action.payload)
            if (item) item.number++
            addCartToLocalStorage(state)
        },
        decrement: (state, action) => {
            const item = state.cart.find(el => el.id === action.payload)
            if (item && item.number > 1) item.number--
            addCartToLocalStorage(state)
        },
    }
})

export const cartReducer = cartSlice.reducer
export const { initializeCart, addToCart, deleteFromCart, increment, decrement } = cartSlice.actions

export const selectTotalSum = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.price * item.number, 0);

export const getCartLength = state => state.cart.cart.length