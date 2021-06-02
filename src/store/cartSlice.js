import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart(state, action) {
			console.log(action.payload.product);
			state.push(action.payload.product);
		},
		removeFromCart(state, action) {
			console.log('remove from cart');
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
