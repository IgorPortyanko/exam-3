import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    allSets: [],
    isLoading: false,
    error: null,
}

export const setsList = createAsyncThunk('allsets/fetchData', async () => {
    const response = await fetch('http://localhost:3001/sets')
    const data = response.json()
    return data
})

const setsSlice = createSlice({
    name: 'sets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setsList.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.allSets = action.payload
            })
            .addCase(setsList.pending, (state, action) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(setsList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})



export const setsReducer = setsSlice.reducer