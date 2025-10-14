import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    sets: [],
}

const setsSlice = createSlice({
    name: 'sets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setsList.fulfilled, (state, action) => {
            state.sets = action.payload 
        })
    }
})

export const setsList = createAsyncThunk('allsets/fetchData', async () => {
    const response = await fetch('http://localhost:3001/sets')
    const data = response.json()
    return data
})

export const setsReducer = setsSlice.reducer