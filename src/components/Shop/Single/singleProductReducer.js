const singleProductReducer = (state, action) => {
	switch (action.type) {
		case 'SET_COLOR':
			return { ...state, color: action.color };
		case 'SET_SIZE':
			return { ...state, size: action.size };
		case 'ADD_ITEM':
			return { ...state, quantity: state.quantity + action.counter };
		case 'REMOVE_ITEM':
			return { ...state, quantity: state.quantity - action.counter };
		default:
			throw new Error('smth went wrong with the singleProductReducer');
	}
};

export default singleProductReducer;
