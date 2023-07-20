import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchTovarsTypes } from './typesOperations';

export type Type = {
  ua: string;
  eu: string;
  id: string;
};

interface TovarsSliceType {
  types: Type[];
  typesIsLoading: boolean;
}

const initialState: TovarsSliceType = {
  types: [],
  typesIsLoading: false,
};

const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTovarsTypes.pending, state => {
        state.typesIsLoading = false;
      })
      .addCase(fetchTovarsTypes.fulfilled, (state, action) => {
        state.types = action.payload;
        state.typesIsLoading = true;
      })
      .addCase(fetchTovarsTypes.rejected, (state, action) => {
        state.typesIsLoading = false;
      });
  },
});

export const selectTypes = (state: RootState) => state.types.types;
export const selectTypesIsLoading = (state: RootState) =>
  state.types.typesIsLoading;

export default typesSlice.reducer;
