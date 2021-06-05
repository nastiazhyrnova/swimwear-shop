import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loadingSlice';
import cartSlice from './cartSlice';
import productsSlice from './productsSlice';

const store = configureStore({
	reducer: {
		loading: loadingSlice.reducer,
		cart: cartSlice.reducer,
		products: productsSlice.reducer,
	},
});

export default store;
