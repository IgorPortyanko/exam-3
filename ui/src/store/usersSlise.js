import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    allUsers: [],
    isLoading: false,
    error: null,
    currentUser: JSON.parse(localStorage.getItem("userData")) || null,
}

export const usersList = createAsyncThunk('allusers/fetchData', async () => {
    const response = await fetch('http://localhost:3001/users')
    const data = await response.json()
    return data
})

export const registerUser = createAsyncThunk("users/register", async (newUser, { rejectWithValue }) => {
    try {
        const response = await fetch("http://localhost:3001/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Помилка реєстрації");
        }

        const data = await response.json();
        return data.user
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const loginUser = createAsyncThunk(
    "users/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:3001/users");
            const users = await response.json();

            const foundUser = users.find(
                (user) =>
                    user.tel === credentials.tel.trim() &&
                    user.password === credentials.password
            );

            if (!foundUser) {
                throw new Error("Невірний телефон або пароль");
            }

            localStorage.setItem("userData", JSON.stringify(foundUser));

            return foundUser;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    })

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logout: (state) => {
            state.currentUser = null;
            localStorage.removeItem("userData");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(usersList.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.allUsers = action.payload
            })
            .addCase(usersList.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(usersList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })

            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allUsers.push(action.payload);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
})

export const usersReducer = usersSlice.reducer
export const { logout } = usersSlice.actions;