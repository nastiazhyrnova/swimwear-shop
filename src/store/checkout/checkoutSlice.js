import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
	name: 'checkout',
	initialState: {
		shippingCost: 0,
		deliveryAddress: null,
		// total: null,
	},
	reducers: {
		setShippingCost: (state, action) => {
			state.shippingCost = action.payload;
		},
		setDeliveryAddress: (state, action) => {
			state.deliveryAddress = action.payload;
		},
		// setTotal: (state, action) => {
		// 	state.total = action.payload;
		// },
	},
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice;
