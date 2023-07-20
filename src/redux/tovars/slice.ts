import { createSlice } from '@reduxjs/toolkit';

import Tovar from '../../Types/tovar';
import { RootState } from '../store';

interface type {
  ua: string;
  eu: string;
}

interface tovarsSliceType {
  types: type[];
  tovars: Tovar[];
}

const initialState: tovarsSliceType = {
  types: [],
  tovars: [],
};

const tovarsSlice = createSlice({
  name: 'tovars',
  initialState,
  reducers: {},
});

// export const {} = tovarsSlice.actions;

export const selectTovars = (state: RootState) => state.tovars.tovars;
export const selectTovarsTypes = (state: RootState) => state.tovars.types;

export default tovarsSlice.reducer;
