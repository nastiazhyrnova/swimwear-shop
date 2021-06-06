import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		attributes: {
			color: [],
			size: [],
		},
	},
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload.products;
		},
		setColors: (state, action) => {
			const colors = action.payload.color;
			state.attributes.color = colors;
		},
		setSizes: (state, action) => {
			const sizes = action.payload.size;
			state.attributes.size = sizes;
		},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice;
