const singleProductReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SKU':
			return { ...state, sku: action.sku };
		case 'SET_COLOR':
			return { ...state, color: action.color };
		case 'SET_SIZE':
			return { ...state, size: action.size };
		case 'ADD_ITEM':
			return { ...state, quantity: state.quantity + 1 };
		case 'REMOVE_ITEM':
			return { ...state, quantity: state.quantity - 1 };
		default:
			throw new Error('smth went wrong with the singleProductReducer');
	}
};

export default singleProductReducer;
