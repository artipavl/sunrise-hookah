import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICredentialsSignUp, Admin } from '../../Types/typesAuth';

axios.defaults.baseURL = 'https://sunrise-hookah-api.onrender.com/';

export const fetchAdmins = createAsyncThunk(
  'adminList/fetchAdmins',
  async (_, thunkAPI) => {
    try {
      const date = await axios.get(`all`);

      if (date.status !== 200) {
        return thunkAPI.rejectWithValue(date.data);
      }

      return date.data.admins as Admin[];
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUp = createAsyncThunk(
  'adminList/signUp',
  async (credentials: ICredentialsSignUp, thunkAPI) => {
    try {
      const date = await axios.post('/add', credentials);
      return date.data as Admin;
    } catch (error: any) {
      if (error.response.status === 409) {
        console.log(error);
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const remove = createAsyncThunk(
  'adminList/remove',
  async (id: string, thunkAPI) => {
    try {
      await axios.delete(`/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
