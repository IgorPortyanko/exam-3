import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    allRolls: [],
    isLoading: false,
    error: null,
}

export const rollsList = createAsyncThunk('allrolls/fetchData', async () => {
    const response = await fetch('http://localhost:3001/rolls')
    const data = response.json()
    return data
})

const rollsSlice = createSlice({
    name: 'rolls',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(rollsList.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.allRolls = action.payload
            })
            .addCase(rollsList.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(rollsList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})

export const rollsReducer = rollsSlice.reducer