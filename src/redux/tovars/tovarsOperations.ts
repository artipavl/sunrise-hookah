import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Tovar from '../../Types/tovar';

axios.defaults.baseURL = 'https://sunrise-hookah-api.onrender.com/';

interface count {
	count: number;
}

interface MyData {
	tovars: Tovar[];
	count: count;
}

export const fetchTovarsByTypes = createAsyncThunk(
	'users/fetchTovarsByTypes',
	async (type: string, thunkAPI) => {
		try {
			const date = await axios.get(`tovar/type/${type}`);
			if (date.status !== 200) {
				return thunkAPI.rejectWithValue(date.data);
			}

			return date.data as MyData;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const fetchAllTovars = createAsyncThunk(
	'users/fetchAllTovars',
	async (_, thunkAPI) => {
		try {
			const date = await axios.get(`tovar`);
			if (date.status !== 200) {
				return thunkAPI.rejectWithValue(date.data);
			}

			return date.data.tovars as Tovar[];
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
export const addTovar = createAsyncThunk(
	'users/addTovar',
	async (form: any, thunkAPI) => {
		try {
			const date = await axios.post('/tovar', form);
			if (date.status !== 201) {
				return thunkAPI.rejectWithValue(date.data);
			}

			return date.data as Tovar;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

interface updateTovarProps {
	form: any;
	id: string;
}

export const updateTovar = createAsyncThunk(
	'users/updateTovar',
	async (props: updateTovarProps, thunkAPI) => {
		try {
			const date = await axios.put(`/tovar/${props.id}`, props.form);
			if (date.status !== 201) {
				return thunkAPI.rejectWithValue(date.data);
			}

			return date.data as Tovar;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const removeTovarById = createAsyncThunk(
	'users/removeTovar',
	async (id: string, thunkAPI) => {
		try {
			const date = await axios.delete(`tovar/${id}`);
			if (date.status !== 200) {
				return thunkAPI.rejectWithValue(date.data);
			}

			// return date.data.tovars as Tovar[];
			return id;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
