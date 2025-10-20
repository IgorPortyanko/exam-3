import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    allBurger: [],
    isLoading: false,
    error: null,
}

export const burgerList = createAsyncThunk('allburger/fetchData', async () => {
    const response = await fetch('http://localhost:3001/burgers')
    const data = response.json()
    return data
})

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(burgerList.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.allBurger = action.payload
            })
            .addCase(burgerList.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(burgerList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})


export const burgerReducer = burgerSlice.reducer