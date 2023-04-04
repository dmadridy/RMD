import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userStatus',
  initialState: {
    user: null,
    status: false,
  },
  reducers: {
    logIn: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.status = true;
    },
    logOut: (state) => {
      state.user = null;
      state.status = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
