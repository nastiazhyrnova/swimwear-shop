import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loading/loadingSlice';
import cartSlice from './cart/cartSlice';
import productsSlice from './products/productsSlice';
import sidebarSlice from './sidebar/sidebarSlice';

const store = configureStore({
	reducer: {
		loading: loadingSlice.reducer,
		cart: cartSlice.reducer,
		products: productsSlice.reducer,
		sidebar: sidebarSlice.reducer,
	},
});

export default store;
