import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";

//initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
? localStorage.getItem("userToken")
: null;

const initialState = {
    loading: false,
    userInfo: {},
    userToken: userToken,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
     
      logout: (state) => {
        localStorage.removeItem('userToken') // deletes token from storage
        state.loading = false
        state.userInfo = null
        state.userToken = null
        state.error = null
      }
      
    },
    extraReducers: {
        //login user
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
          },
          [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.success = true
            state.userToken = payload.userToken
          },
          [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            state.success = false
          }
    },
})

export default authSlice.reducer;
