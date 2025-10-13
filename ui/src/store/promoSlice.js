import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    promo: [],
}

const promoSlice = createSlice({
    name: 'promo',
    initialState,
    reducers: {}
})

export const promoReducer = promoSlice.reducer