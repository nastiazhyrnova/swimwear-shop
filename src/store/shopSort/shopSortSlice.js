import { createSlice } from '@reduxjs/toolkit';

const shopSortSlice = createSlice({
	name: 'shopSort',
	initialState: {
		by: null,
		asc: true,
	},
	reducers: {
		setSorting: (state, action) => {
			return { by: action.payload.by, asc: action.payload.asc };
		},
		// resetSorting: (state, action) => {
		// 	return { by: null, asc: true };
		// },
	},
});

export const shopSortActions = shopSortSlice.actions;

export default shopSortSlice;
