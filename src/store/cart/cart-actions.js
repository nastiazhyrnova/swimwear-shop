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

export const addToCartAction = (state, action) => {
	const existingItemIndex = getItemIndex(state, action.payload.product);

	if (existingItemIndex === null) {
		return state.push(action.payload.product);
	} else {
		state[existingItemIndex].quantity =
			state[existingItemIndex].quantity + action.payload.quantity;
		return state;
	}
};
export const reduceItemQuantityAction = (state, action) => {
	const existingItemIndex = getItemIndex(state, action.payload.product);

	state[existingItemIndex].quantity =
		state[existingItemIndex].quantity - action.payload.quantity;
	return state;
};

export const removeFromCartAction = (state, action) => {
	const existingItemIndex = getItemIndex(state, action.payload.product);
	return state.splice(existingItemIndex, 1);
};
