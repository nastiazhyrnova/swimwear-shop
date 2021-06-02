import { createSlice } from '@reduxjs/toolkit';

const addToCartAction = (state, action) => {
	let existingItemIndex = null;
	const existingItem = state.filter((cartItem, itemIndex) => {
		if (
			cartItem.sku === action.payload.productDetails.sku &&
			cartItem.color === action.payload.productDetails.color &&
			cartItem.size === action.payload.productDetails.size
		) {
			existingItemIndex = itemIndex;
			return true;
		} else {
			return false;
		}
	});

	console.log(existingItemIndex);

	if (!existingItemIndex) {
		return state.push(action.payload.productDetails);
	} else {
		console.log('product exists in the cart');
		state[existingItemIndex].quantity = +action.payload.quantity;
		return state;
	}
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart(state, action) {
			addToCartAction(state, action);
		},
		removeFromCart(state, action) {
			console.log('remove from cart');
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
