import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		shopFilters: {
			show: false,
		},
	},
	reducers: {
		openModal: (state, action) => {
			//open indicated modal and close all another
			// const otherModals = Object.keys(state).filter(
			// 	modal => modal !== action.payload.modal
			// );
			// otherModals.forEach(modal => (state[modal].show = false));
			state[action.payload.modal].show = true;
		},
		closeModal: (state, action) => {
			//close all modals
			// const allModals = Object.keys(state);
			// allModals.forEach(modal => (state[modal].show = false));

			state[action.payload.modal].show = false;
		},
	},
});

export const modalActions = modalSlice.actions;

export default modalSlice;
