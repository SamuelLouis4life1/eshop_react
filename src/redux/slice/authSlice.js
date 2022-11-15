import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: null,
    useName: null,
    userID: null,  
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER:(state, action) =>{
        console.log(action.payload);
        const {email, useName, userID} = action.payload
        state.isLoggedIn = true;
        state.email = email
        state.useName = useName
        state.userID = userID
    },
    REMOVE_ACTIVE_USER(state) {
        state.isLoggedIn = false;
        state.email = null
        state.useName = null
        state.userID = null
        console.log(state.isLoggedIn);
    }
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.useName;
export const selectuserID = (state) => state.auth.userID

export default authSlice.reducer;