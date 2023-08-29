import { createSlice } from '@reduxjs/toolkit';

import Tovar from '../../Types/tovar';
import { RootState } from '../store';
import {
	fetchAllTovars,
	fetchTovarsByTypes,
	removeTovarById,
} from './tovarsOperations';

interface TovarsSliceType {
	tovars: Tovar[];
	count: number;
	tovarIsLoading: boolean;
}

const initialState: TovarsSliceType = {
	tovars: [],
	count: 0,
	tovarIsLoading: false,
};

const tovarsSlice = createSlice({
	name: 'tovars',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchTovarsByTypes.pending, state => {
				state.tovarIsLoading = false;
			})
			.addCase(fetchTovarsByTypes.fulfilled, (state, action) => {
				state.tovars = action.payload.tovars;
				state.count = action.payload.count.count;
				state.tovarIsLoading = true;
			})
			.addCase(fetchTovarsByTypes.rejected, state => {
				state.tovarIsLoading = false;
			})
			.addCase(fetchAllTovars.pending, state => {
				state.tovarIsLoading = false;
			})
			.addCase(fetchAllTovars.fulfilled, (state, action) => {
				state.tovars = action.payload;
				state.count = action.payload.length;
				state.tovarIsLoading = true;
			})
			.addCase(fetchAllTovars.rejected, state => {
				state.tovarIsLoading = false;
			})

			.addCase(removeTovarById.fulfilled, (state, action) => {
				state.tovars = state.tovars.filter(
					tovar => tovar.id !== action.payload
				);
			});
	},
});

export const selectTovars = (state: RootState) => state.tovars.tovars;
export const selectTovarsLoading = (state: RootState) =>
	state.tovars.tovarIsLoading;

export default tovarsSlice.reducer;
