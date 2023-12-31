import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectIsLogin = (state: RootState) => state.auth.isLogin;

export const getUser = (state: RootState) => state.auth;

export const selectUser = createDraftSafeSelector(getUser, state => state.user);

export const selectToken = (state: RootState) => state.auth.token;
