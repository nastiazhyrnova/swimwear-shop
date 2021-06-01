import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
	name: 'loading',
	initialState: false,
	reducers: {
		startLoading: state => {
			state = true;
		},
		stopLoading: state => {
			state = false;
		},
	},
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice;
