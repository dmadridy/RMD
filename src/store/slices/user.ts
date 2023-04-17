import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    status: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.name = action.payload;
      state.status = true;
    },
    logOut: (state) => {
      state.name = null;
      state.status = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
