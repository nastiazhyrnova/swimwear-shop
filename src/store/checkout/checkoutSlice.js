import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
	name: 'checkout',
	initialState: {
		date: null,
		shippingCost: 0,
		deliveryAddress: null,
		products: [],
		userId: null,
		subtotal: null,
		status: null,
	},
	reducers: {
		setOrderDetails: (state, action) => {
			state.shippingCost = action.payload.shippingCost;
			state.deliveryAddress = action.payload.deliveryAddress;
			state.products = action.payload.products;
			state.userId = action.payload.userId;
			state.date = action.payload.date;
			state.subtotal = action.payload.subtotal;
		},
		setStatus: (state, action) => {
			state.status = action.payload.status;
		},
		resetData: (state, action) => {
			return {
				date: null,
				shippingCost: 0,
				deliveryAddress: null,
				products: [],
				userId: null,
				subtotal: null,
				status: null,
			};
		},
	},
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice;
