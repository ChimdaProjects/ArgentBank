import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        //login user
        [loginUser.pending]: (state) => {
            state.loading = true,
            state.error = null
        },
        [loginUser.fulfilled]: (state) => {
            state.loading = false,
            state.success = true // login successful
        },
        [loginUser.rejected]: (state, {payload}) => {
            state.loading = false,
            state.error = payload
        }
    },
})

export default authSlice.reducer;