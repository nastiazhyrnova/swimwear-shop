import { createSlice } from '@reduxjs/toolkit';

const calculateExpirationTime = expirationTime => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();

	const remainingDuration = adjExpirationTime - currentTime;

	return remainingDuration;
};

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
			state.userId = action.payload.loginData.localId;
			state.expiresIn = action.payload.expirationTime;
		},
		checkAuth(state, action) {
			const storedDate = localStorage.getItem('expirationDate');
			if (
				localStorage.getItem('authToken') &&
				calculateExpirationTime(storedDate) > 0
			) {
				state.token = localStorage.getItem('authToken');
				state.userId = localStorage.getItem('userId');
				state.expiresIn = localStorage.getItem('expirationDate');
			}
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
			state.userId = action.payload.loginData.localId;
			state.expiresIn = action.payload.expirationTime;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
