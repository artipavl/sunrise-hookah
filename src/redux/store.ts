import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import selectTovars from './tovars/slice';
import typesSlice from './types/slice';
import basketSlice from './basket/basketSlice';
import { authSlice } from './auth/authReducer';

const store = configureStore({
  reducer: {
    tovars: selectTovars,
    types: typesSlice,
    basket: basketSlice,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
