import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import Tovar from '../../Types/tovar';

// Define a type for the slice state

type updateQuantityPayload = {
  id: string;
  baskeQuantity: number;
};
type tovar = Tovar & {
  baskeQuantity: number;
};

interface BasketState {
  tovars: tovar[];
}

// Define the initial state using that type
const initialState: BasketState = {
  tovars: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Tovar>) => {
      const index = state.tovars.findIndex(
        item => item.id === action.payload.id
      );

      if (index !== -1) {
        state.tovars[index].baskeQuantity =
          state.tovars[index].baskeQuantity + 1;
      } else {
        state.tovars.push({ ...action.payload, baskeQuantity: 1 });
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
  },
});

export const { addToBasket, updateQuantity, deleteFromBasket } =
  basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket.tovars;

export default basketSlice.reducer;
