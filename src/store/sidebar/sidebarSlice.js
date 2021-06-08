import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState: {
		userAccount: {
			show: false,
		},
		cart: {
			show: false,
		},
		mobileMenu: {
			show: false,
		},
	},
	reducers: {
		openSidebar: (state, action) => {
			//open indicated sidebar and close all another
			const otherSidebars = Object.keys(state).filter(
				sidebar => sidebar !== action.payload.sidebar
			);
			otherSidebars.forEach(sidebar => (state[sidebar].show = false));
			state[action.payload.sidebar].show = true;
		},
		closeSidebar: (state, action) => {
			//close all sidebars
			const allSidebars = Object.keys(state);
			allSidebars.forEach(sidebar => (state[sidebar].show = false));
		},
	},
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice;
