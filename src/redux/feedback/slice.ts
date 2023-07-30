import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { getFeedbacks, delFeedback } from './feedbackOperations';
import Feedback from '../../Types/feedback';

interface TovarsSliceType {
  feedbacks: Feedback[];
  feedbacksIsLoading: boolean;
}

const initialState: TovarsSliceType = {
  feedbacks: [],
  feedbacksIsLoading: false,
};

const tovarsSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFeedbacks.pending, state => {
        state.feedbacksIsLoading = false;
      })
      .addCase(getFeedbacks.fulfilled, (state, action) => {
        state.feedbacks = action.payload;
        state.feedbacksIsLoading = true;
      })
      .addCase(getFeedbacks.rejected, state => {
        state.feedbacksIsLoading = false;
      })

      .addCase(delFeedback.pending, state => {
        state.feedbacksIsLoading = false;
      })
      .addCase(delFeedback.fulfilled, (state, action) => {
        state.feedbacks = state.feedbacks.filter(
          feedback => feedback.id !== action.payload
        );
        state.feedbacksIsLoading = true;
      })
      .addCase(delFeedback.rejected, state => {
        state.feedbacksIsLoading = false;
      });
  },
});

export const selectFeedbacks = (state: RootState) => state.feedbacks.feedbacks;
export const selectFeedbacksLoading = (state: RootState) =>
  state.feedbacks.feedbacksIsLoading;

export default tovarsSlice.reducer;
