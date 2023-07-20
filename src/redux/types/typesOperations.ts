import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Type } from './slice';

axios.defaults.baseURL = 'https://sunrise-hookah-api.onrender.com/';

export const fetchTovarsTypes = createAsyncThunk(
  'users/fetchTovarsTypes',
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