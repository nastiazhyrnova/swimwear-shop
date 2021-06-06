import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loading/loadingSlice';
import cartSlice from './cart/cartSlice';
import productsSlice from './products/productsSlice';

const store = configureStore({
	reducer: {
		loading: loadingSlice.reducer,
		cart: cartSlice.reducer,
		products: productsSlice.reducer,
	},
});

export default store;
