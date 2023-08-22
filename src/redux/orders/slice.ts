import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { fetchOrders } from './ordersOperations';
import { Order } from '../../Types/order';

interface TovarsSliceType {
	orders: Order[];
	count: number;
	orderIsLoading: boolean;
}

const initialState: TovarsSliceType = {
	orders: [],
	count: 0,
	orderIsLoading: false,
};

const tovarsSlice = createSlice({
	name: 'tovars',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchOrders.pending, state => {
				state.orderIsLoading = false;
			})
			.addCase(fetchOrders.fulfilled, (state, action) => {
				state.orders = action.payload;
				state.count = action.payload.length;
				state.orderIsLoading = true;
			})
			.addCase(fetchOrders.rejected, state => {
				state.orderIsLoading = false;
			});
	},
});

export const selectOrders = (state: RootState) => state.orders.orders;
export const selectOrdersLoading = (state: RootState) => state.orders.orderIsLoading;
export const selectOrdersCount = (state: RootState) => state.orders.count;

export default tovarsSlice.reducer;
