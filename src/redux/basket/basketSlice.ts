import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TovarBasket } from '../../Types/tovar';

// Define a type for the slice state

type updateQuantityPayload = {
	id: string;
	baskeQuantity: number;
};

interface BasketState {
	tovars: TovarBasket[];
}

// Define the initial state using that type
const initialState: BasketState = {
	tovars: [],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket: (state, action: PayloadAction<TovarBasket>) => {
			const index = state.tovars.findIndex(
				item => item.id === action.payload.id
			);

			if (index !== -1) {
				state.tovars[index].baskeQuantity =
					state.tovars[index].baskeQuantity + 1;
			} else {
				state.tovars.push(action.payload);
			}
		},
		updateQuantity: (state, action: PayloadAction<updateQuantityPayload>) => {
			const index = state.tovars.findIndex(
				item => item.id === action.payload.id
			);
			if (index !== -1) {
				state.tovars[index].baskeQuantity = action.payload.baskeQuantity;
			}
		},
		deleteFromBasket: (state, action: PayloadAction<string>) => {
			state.tovars = state.tovars.filter(tovar => tovar.id !== action.payload);
		},
		removeBasket: state => {
			state = initialState;
		},
	},
});

export const { addToBasket, updateQuantity, deleteFromBasket, removeBasket } =
	basketSlice.actions;

export default basketSlice.reducer;
