import { createSlice } from '@reduxjs/toolkit';

const shopFiltersSlice = createSlice({
	name: 'shopFilters',
	initialState: {
		color: null,
		category: null,
		sizes: [],
	},
	reducers: {
		filterByColor: (state, action) => {
			return (state = { ...state, color: action.payload.color });
		},
		filterByCategory: (state, action) => {
			if (state.category !== action.payload.category) {
				return (state = { ...state, category: action.payload.category });
			} else {
				return (state = { ...state, category: null });
			}
		},
		filterBySizes: (state, action) => {
			if (state.sizes.includes(action.payload.size)) {
				const index = state.sizes.findIndex(
					size => size === action.payload.size
				);
				state.sizes.splice(index, 1);
			} else {
				state.sizes.push(action.payload.size);
			}
		},
		resetFilters: (state, action) => {
			return (state = {
				color: null,
				category: null,
				sizes: [],
			});
		},
	},
});

export const shopFiltersActions = shopFiltersSlice.actions;

export default shopFiltersSlice;
