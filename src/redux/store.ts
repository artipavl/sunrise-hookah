import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import selectTovars from './tovars/slice';
import typesSlice from './types/slice';

const store = configureStore({
  reducer: {
    tovars: selectTovars,
    types: typesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
