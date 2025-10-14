import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    sushi: [],
}

const sushiSlice = createSlice({
    name: 'sushi',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sushiList.fulfilled, (state, action) => {
            state.sushi = action.payload 
        })
    }
})

export const sushiList = createAsyncThunk('allsushi/fetchData', async () => {
    const response = await fetch('http://localhost:3001/sushi')
    const data = response.json()
    return data
})

export const sushiReducer = sushiSlice.reducer