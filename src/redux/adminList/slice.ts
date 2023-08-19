import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchAdmins, remove, signUp } from './adminsOperations';
import { Admin } from '../../Types/typesAuth';

interface TovarsSliceType {
  admins: Admin[];
  adminsIsLoading: boolean;
  error: Error | null;
}

const initialState: TovarsSliceType = {
  admins: [],
  adminsIsLoading: false,
  error: null,
};

const adminsSlice = createSlice({
  name: 'admins',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAdmins.pending, state => {
        state.adminsIsLoading = false;
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        console.log(action.payload);
        state.admins = action.payload;
        state.adminsIsLoading = true;
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        state.adminsIsLoading = false;
      })

      .addCase(signUp.pending, state => {})
      .addCase(signUp.fulfilled, (state, action) => {
        state.admins.push(action.payload);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.adminsIsLoading = false;
      })

      .addCase(remove.pending, state => {})
      .addCase(remove.fulfilled, (state, action) => {
        state.admins = state.admins.filter(
          admin => admin.id !== action.payload
        );
      })
      .addCase(remove.rejected, (state, action) => {
        state.adminsIsLoading = false;
      });
  },
});

export const selectAdmins = (state: RootState) => state.admins.admins;
export const selectAdminsIsLoading = (state: RootState) =>
  state.admins.adminsIsLoading;

export default adminsSlice.reducer;
