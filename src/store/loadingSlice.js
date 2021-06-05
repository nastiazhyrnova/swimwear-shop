import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
	name: 'loading',
	initialState: false,
	reducers: {
		startLoading(state) {
			return (state = true);
		},
		stopLoading(state) {
			return (state = false);
		},
	},
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice;
