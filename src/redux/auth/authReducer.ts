import { createSlice } from '@reduxjs/toolkit';
import { logOut, signIn, signUp } from './authOperations';

interface AuthSliceTypes {
  user: {
    name: null | String,
    email: null | String
  },
  token: null | String,
  isLoggedIn: Boolean,
}

const initialState: AuthSliceTypes = {
  user: {
    name: null,
    email: null
  },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(signUp.pending, (state, _) => state)
      .addCase(signUp.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user.name = payload.dataUser.name;
        state.user.email = payload.dataUser.email;
        state.token = payload.dataUser.token;
        state.isLoggedIn = true;
      })

      .addCase(signIn.pending, (state, _) => state)
      .addCase(signIn.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user.name = payload.dataUser.name;
        state.user.email = payload.dataUser.email;
        state.token = payload.dataUser.token;
        state.isLoggedIn = true;
      })

      .addCase(logOut.pending, (state, _) => state)
      .addCase(logOut.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
});