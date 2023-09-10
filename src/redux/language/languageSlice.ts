import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface LanguageState {
	language: 'uk' | 'en';
}

// Define the initial state using that type
const initialState: LanguageState = {
	language: 'uk',
};

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		updateLanguage: (state, action: PayloadAction<'uk' | 'en'>) => {
			state.language = action.payload
		},
	},
});

export const { updateLanguage } = languageSlice.actions;

export default languageSlice.reducer;
