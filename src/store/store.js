import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loadingSlice';
import cartSlice from './cartSlice';

const store = configureStore({
	reducer: {
		loading: loadingSlice.reducer,
		cart: cartSlice.reducer,
	},
});

export default store;
