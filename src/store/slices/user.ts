import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
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
