import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuth, ICredentials } from '../../Types/typesAuth';

axios.defaults.baseURL = 'https://sunrise-hookah-api.onrender.com/';

const setAuthHeader = (token: String): void => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = (): void => {
	axios.defaults.headers.common.Authorization = '';
};

export const signIn = createAsyncThunk<
	IAuth,
	ICredentials,
	{ rejectValue: string }
>('auth/signIn', async (credentials, thunkAPI) => {
	try {
		const { data } = await axios.patch('', credentials);
		setAuthHeader(data.token);
		return data;
	} catch (error: any) {
		if (error.response.status === 401 || error.response.status === 500) {
			console.log(error);
		}
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
	try {
		await axios.post('/logout');
		clearAuthHeader();
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
