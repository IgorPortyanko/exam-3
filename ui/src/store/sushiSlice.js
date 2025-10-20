import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    allSushi: [],
    isLoading: false,
    error: null,
}

export const sushiList = createAsyncThunk('allsushi/fetchData', async () => {
    const response = await fetch('http://localhost:3001/sushi')
    const data = response.json()
    return data
})

const sushiSlice = createSlice({
    name: 'sushi',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sushiList.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.allSushi = action.payload
            })
            .addCase(sushiList.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(sushiList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})



export const sushiReducer = sushiSlice.reducer