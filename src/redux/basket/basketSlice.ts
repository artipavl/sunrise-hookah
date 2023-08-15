import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Tovar, { TovarBasket } from '../../Types/tovar';

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
  tovars: [
    {
      cost: 8,
      quantity: 15,
      completeSet: {
        en: 'test',
        ua: 'test',
      },
      parameters: {
        en: 'test',
        ua: 'test',
      },
      fotos: [],
      name: {
        en: 'test',
        ua: 'test',
      },
      description: {
        en: 'test',
        ua: 'test',
      },
      type: 'hookahs',
      popularity: 4,
      id: 'HYTPai3gH3HLr1yctMt12341',
      baskeQuantity: 2,
    },
    {
      cost: 8,
      quantity: 15,
      completeSet: {
        en: 'testqweq',
        ua: 'testqwewqew',
      },
      parameters: {
        en: 'testasda',
        ua: 'testasd',
      },
      fotos: [],
      name: {
        en: 'test123213213',
        ua: 'test17896',
      },
      description: {
        en: 'test',
        ua: 'test',
      },
      type: 'hookahs',
      popularity: 4,
      id: 'HYTPai3gH3HLr1yctMt11231',
      baskeQuantity: 3,
    },
  ],
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

export default basketSlice.reducer;
