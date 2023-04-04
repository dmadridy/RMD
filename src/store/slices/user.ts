import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userStatus',
  initialState: {
    status: false,
  },
  reducers: {
    logIn: (state) => {
      state.status = true;
    },
    logOut: (state) => {
      state.status = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
