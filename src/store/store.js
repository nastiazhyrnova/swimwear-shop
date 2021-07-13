import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loading/loadingSlice';
import cartSlice from './cart/cartSlice';
import productsSlice from './products/productsSlice';
import sidebarSlice from './sidebar/sidebarSlice';
import modalSlice from './modal/modalSlice';
import authSlice from './auth/authSlice';
import notificationSlice from './notification/notificationSlice';
import checkoutSlice from './checkout/checkoutSlice';

const store = configureStore({
	reducer: {
		loading: loadingSlice.reducer,
		cart: cartSlice.reducer,
		products: productsSlice.reducer,
		sidebar: sidebarSlice.reducer,
		modal: modalSlice.reducer,
		auth: authSlice.reducer,
		notification: notificationSlice.reducer,
		checkout: checkoutSlice.reducer,
	},
});

export default store;
