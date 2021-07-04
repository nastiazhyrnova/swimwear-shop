import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: null,
		userId: null,
		expiresIn: null,
	},
	reducers: {
		login(state, action) {
			state.token = action.payload.loginData.idToken;
			state.userId = action.payload.localId;
		},
		logout(state, action) {
			localStorage.removeItem('authToken');
			localStorage.removeItem('userId');
			localStorage.removeItem('expirationDate');
			return {
				token: null,
				userId: null,
				expiresIn: null,
			};
		},
		register(state, action) {
			state.token = action.payload.loginData.idToken;
			state.userId = action.payload.localId;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
