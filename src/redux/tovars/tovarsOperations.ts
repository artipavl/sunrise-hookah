import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://sunrise-hookah-api.onrender.com/';

interface MyData {
  // ...
}

export const fetchTovarsTypes = createAsyncThunk(
  'users/fetchTovarsTypes',
  // Declare the type your function argument here:
  async (userId: number) => {
    const date = await axios.get(`users/type`);

    // Inferred return type: Promise<MyData>
    return date as MyData;
  }
);
