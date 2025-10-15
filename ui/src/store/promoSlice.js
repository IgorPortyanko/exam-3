import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    promo: [],
}

const promoSlice = createSlice({
    name: 'promo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(promoList.fulfilled, (state, action) => {
            state.promo = action.payload
        })
    }
})

export const promoList = createAsyncThunk('allpromo/fetchData', async () => {
    const response = await fetch('http://localhost:3001/promo')
    const data = response.json()
    return data
}) 

export const promoReducer = promoSlice.reducer