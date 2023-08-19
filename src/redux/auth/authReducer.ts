import { createSlice } from '@reduxjs/toolkit';
import { logOut, signIn } from './authOperations';

interface AuthSliceTypes {
  user: {
    name: null | String;
    email: null | String;
  };
  token: null | String;
  isLoggedIn: Boolean;
  isLogin: Boolean;
}

const initialState: AuthSliceTypes = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      // .addCase(signUp.pending, (state, _) => {
      //   state.isLoggedIn = true;
      //   state.isLogin = false;
      // })
      // .addCase(signUp.fulfilled, (state, { payload }) => {
      //   state.user.name = payload.user.name;
      //   state.user.email = payload.user.email;
      //   state.token = payload.token;
      //   state.isLoggedIn = false;
      //   state.isLogin = true;
      // })
      // .addCase(signUp.rejected, (state, _) => {
      //   state.user = initialState.user;
      //   state.token = null;
      //   state.isLoggedIn = false;
      //   state.isLogin = false;
      // })

      .addCase(signIn.pending, (state, _) => {
        state.isLoggedIn = true;
        state.isLogin = false;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = false;
        state.isLogin = true;
      })
      .addCase(signIn.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isLogin = false;
      })

      .addCase(logOut.pending, (state, _) => state)
      .addCase(logOut.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isLogin = false;
      }),
});
