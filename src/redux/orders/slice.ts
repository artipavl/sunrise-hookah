import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { fetchOrders, delOerder, putOrders } from './ordersOperations';
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
			})
			.addCase(delOerder.pending, state => {})
			.addCase(delOerder.fulfilled, (state, action) => {
				state.orders = state.orders.filter(feedback => feedback.id !== action.payload);
			})
			.addCase(delOerder.rejected, state => {})
			.addCase(putOrders.pending, state => {})
			.addCase(putOrders.fulfilled, (state, action) => {
				state.orders = state.orders.filter(feedback => feedback.id !== action.payload.id);
				state.orders.push(action.payload);
			})
			.addCase(putOrders.rejected, state => {});
	},
});

export const selectOrders = (state: RootState) => state.orders.orders;
export const selectOrdersLoading = (state: RootState) => state.orders.orderIsLoading;
export const selectOrdersCount = (state: RootState) => state.orders.count;

export default tovarsSlice.reducer;
