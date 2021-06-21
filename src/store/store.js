import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loading/loadingSlice';
import cartSlice from './cart/cartSlice';
import productsSlice from './products/productsSlice';
import sidebarSlice from './sidebar/sidebarSlice';
import modalSlice from './modal/modalSlice';
import shopFiltersSlice from './shopFilters/shopFiltersSlice';
import shopSortSlice from './shopSort/shopSortSlice';

const store = configureStore({
	reducer: {
		loading: loadingSlice.reducer,
		cart: cartSlice.reducer,
		products: productsSlice.reducer,
		sidebar: sidebarSlice.reducer,
		modal: modalSlice.reducer,
		shopFilters: shopFiltersSlice.reducer,
		shopSort: shopSortSlice.reducer,
	},
});

export default store;
