import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    allPromo: [],
    isLoading: false,
    error: null,
}

export const promoList = createAsyncThunk('allpromo/fetchData', async () => {
    const response = await fetch('http://localhost:3001/promo')
    const data = await response.json()
    return data
})

const promoSlice = createSlice({
    name: 'promo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(promoList.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.allPromo = action.payload
            })
            .addCase(promoList.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(promoList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})



export const promoReducer = promoSlice.reducer