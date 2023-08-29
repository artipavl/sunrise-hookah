import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Type } from './slice';

axios.defaults.baseURL = 'https://sunrise-hookah-api.onrender.com/';

export const fetchTovarsTypes = createAsyncThunk(
	'type/fetchTovarsTypes',
	async (_, thunkAPI) => {
		try {
			const date = await axios.get(`type`);

			if (date.status !== 200) {
				return thunkAPI.rejectWithValue(date.data);
			}

			return date.data as Type[];
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const addType = createAsyncThunk(
	'type/addType',
	async (type: { ukr: string; en: string }, thunkAPI) => {
		try {
			const date = await axios.post(`type`, { ...type });

			if (date.status !== 200) {
				return thunkAPI.rejectWithValue(date.data);
			}

			return date.data as Type;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

interface putchTypeByIdAction {
	ukr: string;
	en: string;
	id: string;
}

export const putchTypeById = createAsyncThunk(
	'type/putType',
	async (action: putchTypeByIdAction, thunkAPI) => {
		try {
			const date = await axios.put(`type/${action.id}`, {
				ukr: action.ukr,
				en: action.en,
			});
			if (date.status !== 200) {
				return thunkAPI.rejectWithValue(date.data);
			}

			// return date.data.tovars as Tovar[];
			return date.data as Type;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const removeTypeById = createAsyncThunk(
	'users/removeType',
	async (id: string, thunkAPI) => {
		try {
			const date = await axios.get(`type/${id}`);
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
