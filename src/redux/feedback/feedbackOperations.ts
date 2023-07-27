import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Feedback from '../../Types/feedback';

axios.defaults.baseURL = 'https://sunrise-hookah-api.onrender.com/';

export const getFeedbacks = createAsyncThunk(
  'users/getFeedbacks',
  async (_, thunkAPI) => {
    try {
      const date = await axios.get(`/feedback/all`);
      if (date.status !== 200) {
        return thunkAPI.rejectWithValue(date.data);
      }

      return date.data.feedbacks as Feedback[];
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getFeedbackByid = createAsyncThunk(
  'users/getFeedbacksByid',
  async (id: string, thunkAPI) => {
    try {
      const date = await axios.get(`/feedback/${id}`);
      if (date.status !== 200) {
        return thunkAPI.rejectWithValue(date.data);
      }

      return date.data as Feedback;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const delFeedback = createAsyncThunk(
  'users/delFeedback',
  async (id: string, thunkAPI) => {
    try {
      const date = await axios.delete(`/feedback/${id}`);
      if (date.status !== 200) {
        return thunkAPI.rejectWithValue(date.data);
      }

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
