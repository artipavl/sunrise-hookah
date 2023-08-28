import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import selectTovars from './tovars/slice';
import typesSlice from './types/slice';
import basketSlice from './basket/basketSlice';
import feedbackSlice from './feedback/slice';
import adminsSlice from './adminList/slice';
import ordersSlice from './orders/slice';
import { authSlice } from './auth/authReducer';

const persistTovars = {
	key: 'tovars',
	storage,
};

const persistBasket = {
	key: 'basket',
	storage,
};
const persistTypes = {
	key: 'types',
	storage,
};

const rootReducer = combineReducers({
	tovars: persistReducer(persistTovars, selectTovars),
	basket: persistReducer(persistBasket, basketSlice),
	types: persistReducer(persistTypes, typesSlice),

	feedbacks: feedbackSlice,
	auth: authSlice.reducer,
	admins: adminsSlice,
	orders: ordersSlice,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
