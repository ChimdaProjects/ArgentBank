import { createSlice } from "@reduxjs/toolkit";
import { profileUser, profileUserEdit } from "./userActions";

const initialState = {
    userDatas:{},
    openEdit: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDatas: (state, {payload}) => {
            state.userDatas = payload;
        },

        setOpenEdit :(state) => {
            state.openEdit = !state.openEdit;
        },

        editProfile:(state, {payload}) => {
            state.userDatas = payload
        }
     
      
      
    },
    extraReducers: {
        [profileUser.pending]: (state) => {
            state.loading = true
            state.error = null
          },
          [profileUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userDatas = payload.body
            state.userToken = payload.userToken
          },

          [profileUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            
          },
          /**** EDIT USER'S DATAS ******** */
          [profileUserEdit.pending]: (state) => {
            state.loading = true
            state.error = null
          },
          [profileUserEdit.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userDatas = payload.body
            state.userToken = payload.userToken
          },

          [profileUserEdit.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            
          }
    },
})

export const { setUserDatas, setOpenEdit, editProfile } = userSlice.actions;
export default userSlice.reducer;
