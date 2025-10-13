import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    rolls: [],
}

const rollsSlice = createSlice({
    name: 'rolls',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(rollsList.fulfilled, (state, action) => {
            state.rolls = action.payload 
            console.log(state.rolls)
        })
    }
})

export const rollsList = createAsyncThunk('allrolls/fetchData', async () => {
    const response = await fetch('http://localhost:3001/rolls')
    const data = response.json()
    return data
})

export const rollsReducer = rollsSlice.reducer