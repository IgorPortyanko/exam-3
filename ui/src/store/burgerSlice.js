import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    burger: [],
}

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(burgerList.fulfilled, (state, action) => {
            state.burger = action.payload
        })
    }
})

export const burgerList = createAsyncThunk('allburger/fetchData', async () => {
    const response = await fetch('http://localhost:3001/burgers')
    const data = response.json()
    return data
})

export const burgerReducer = burgerSlice.reducer