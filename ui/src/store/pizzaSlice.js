import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    allPizza: [],
    isLoading: false,
    error: null,
}

export const pizzaList = createAsyncThunk('allPizza/fetchData', async () => {
    const response = await fetch('http://localhost:3001/pizza')
    const data = response.json()
    return data
})

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(pizzaList.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.allPizza = action.payload 
            })
            .addCase(pizzaList.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(pizzaList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})

export const pizzaReducer = pizzaSlice.reducer