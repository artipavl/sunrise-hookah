import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import Tovar from '../../Types/tovar';
import { Order } from '../../Types/order';

axios.defaults.baseURL = 'https://sunrise-hookah-api.onrender.com/';

// interface count {
// 	count: number;
// }

// interface MyData {
// 	tovars: Tovar[];
// 	count: count;
// }

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
	try {
		const date = await axios.get(`order`);
		if (date.status !== 200) {
			return thunkAPI.rejectWithValue(date.data);
		}

		return date.data.orders as Order[];
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
