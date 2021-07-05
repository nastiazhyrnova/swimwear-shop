import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
	name: 'notification',
	initialState: {
		show: false,
		message: '',
	},
	reducers: {
		show(state, action) {
			return {
				show: true,
				message: action.payload.message,
			};
		},
		hide(state, action) {
			return {
				show: false,
				message: '',
			};
		},
	},
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
