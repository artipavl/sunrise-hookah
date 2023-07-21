import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://sunrise-hookah-api.onrender.com/';

const setAuthHeader = (token: String): void => { axios.defaults.headers.common.Authorization = `Bearer ${token}` };
const clearAuthHeader = (): void => { axios.defaults.headers.common.Authorization = '' }

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/auth/register', credentials);
            setAuthHeader(data.dataUser.token);
            return data;
        } catch (error: any) {
            if (error.response.status === 409) {
                console.log(error)
            }

            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/auth/login', credentials)
            setAuthHeader(data.dataUser.token)
            return data
        }
        catch (error: any) {
            if (error.response.status === 401 || error.response.status === 500) {
                console.log(error)
            }
            return thunkAPI.rejectWithValue(error.message)
        }
    });

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
    try {
        await axios.post('/auth/logout');
        clearAuthHeader();
    }
    catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

