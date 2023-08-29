import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
	addType,
	fetchTovarsTypes,
	putchTypeById,
	removeTypeById,
} from './typesOperations';

export type Type = {
	ukr: string;
	en: string;
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
			.addCase(fetchTovarsTypes.rejected, state => {
				state.typesIsLoading = false;
			})
			.addCase(addType.fulfilled, (state, action) => {
				state.types.push(action.payload);
			})
			.addCase(removeTypeById.fulfilled, (state, action) => {
				state.types = state.types.filter(type => type.id !== action.payload);
			})
			.addCase(putchTypeById.fulfilled, (state, action) => {
				state.types = state.types.map(type => {
					if (type.id === action.payload.id) {
						return action.payload;
					}
					return type;
				});
			});
	},
});

export const selectTypes = (state: RootState) => state.types.types;
export const selectTypesIsLoading = (state: RootState) =>
	state.types.typesIsLoading;

export default typesSlice.reducer;
