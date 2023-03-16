import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";
import { Navigate } from "react-router-dom";

//initialize token from local storage
const userToken = localStorage.getItem('userToken')? localStorage.getItem("userToken"): null;

const initialState = {
    loading: false,
    userInfo: {},
    token: userToken,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
     
      logout: (state) => {
    
        localStorage.clear() // deletes token from storage
        state.token = null
        state.loading = false
        state.userInfo = null
        state.error = null
        state.success = false
       
        
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
            state.userToken = payload.token
          },
          [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            state.success = false
          }
    },
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;
