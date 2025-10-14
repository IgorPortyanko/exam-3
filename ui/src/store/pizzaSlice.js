import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    pizza: [],
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(pizzaList.fulfilled, (state, action) => {
            state.pizza = action.payload 
        })
    }
})

export const pizzaList = createAsyncThunk('allPizza/fetchData', async () => {
    const response = await fetch('http://localhost:3001/pizza')
    const data = response.json()
    return data
})

export const pizzaReducer = pizzaSlice.reducer