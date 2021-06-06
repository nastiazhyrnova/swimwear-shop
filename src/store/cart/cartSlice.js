import { createSlice } from '@reduxjs/toolkit';
import {
	addToCartAction,
	reduceItemQuantityAction,
	removeFromCartAction,
} from './cart-actions';

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart(state, action) {
			addToCartAction(state, action);
		},
		reduceQuantity(state, action) {
			reduceItemQuantityAction(state, action);
		},
		removeFromCart(state, action) {
			removeFromCartAction(state, action);
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
