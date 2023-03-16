import { createSlice } from "@reduxjs/toolkit";
import { profileUser } from "./userActions";

const initialState = {
    userDatas:null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDatas: (state, {payload}) => {
            state.userDatas = payload;
        }
     
      
      
    },
    extraReducers: {
        [profileUser.pending]: (state) => {
            state.loading = true
            state.error = null
          },
          [profileUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userDatas = payload
            state.userToken = payload.userToken
          },

          [profileUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            
          }
    },
})

export const {setUserDatas} = userSlice.actions;
export default userSlice.reducer;
