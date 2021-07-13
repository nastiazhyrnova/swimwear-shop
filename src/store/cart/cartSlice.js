import { createSlice } from '@reduxjs/toolkit';

const getItemIndex = (cartItems, item) => {
	let existingItemIndex = null;
	const existingItem = cartItems.filter((cartItem, itemIndex) => {
		if (
			cartItem.sku === item.sku &&
			cartItem.color === item.color &&
			cartItem.size === item.size
		) {
			existingItemIndex = itemIndex;
			return true;
		} else {
			return false;
		}
	});
	return existingItemIndex;
};

const addToCartFunc = (state, action) => {
	const existingItemIndex = getItemIndex(state, action.payload.product);

	if (existingItemIndex === null) {
		return state.push(action.payload.product);
	} else {
		state[existingItemIndex].quantity =
			state[existingItemIndex].quantity + action.payload.quantity;
		return state;
	}
};
const reduceItemQuantityFunc = (state, action) => {
	const existingItemIndex = getItemIndex(state, action.payload.product);

	state[existingItemIndex].quantity =
		state[existingItemIndex].quantity - action.payload.quantity;
	return state;
};

const removeFromCartFunc = (state, action) => {
	const existingItemIndex = getItemIndex(state, action.payload.product);
	return state.splice(existingItemIndex, 1);
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart(state, action) {
			addToCartFunc(state, action);
		},
		reduceQuantity(state, action) {
			reduceItemQuantityFunc(state, action);
		},
		removeFromCart(state, action) {
			removeFromCartFunc(state, action);
		},
		setCart(state, action) {
			return (state = action.payload.localCart);
		},
		emptyCart(state, action) {
			return [];
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
