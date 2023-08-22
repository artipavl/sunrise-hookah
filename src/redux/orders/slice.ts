import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { fetchOrders } from './ordersOperations';
import { Order } from '../../Types/order';

interface TovarsSliceType {
	orders: Order[];
	orderIsLoading: boolean;
}

const initialState: TovarsSliceType = {
	orders: [],
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
				state.orderIsLoading = true;
			})
			.addCase(fetchOrders.rejected, state => {
				state.orderIsLoading = false;
			});
	},
});

export const selectOrders = (state: RootState) => state.orders.orders;
export const selectOrdersLoading = (state: RootState) => state.orders.orderIsLoading;

export default tovarsSlice.reducer;
