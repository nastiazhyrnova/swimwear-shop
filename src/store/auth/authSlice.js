import { createSlice } from '@reduxjs/toolkit';

export const calculateExpirationTime = expirationTime => {
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
	},
	reducers: {
		login(state, action) {
			state.token = action.payload.loginData.idToken;
			state.userId = action.payload.loginData.localId;
		},
		checkAuth(state, action) {
			const storedDate = localStorage.getItem('expirationDate');
			if (
				localStorage.getItem('authToken') &&
				calculateExpirationTime(storedDate) > 0
			) {
				state.token = localStorage.getItem('authToken');
				state.userId = localStorage.getItem('userId');
			} else {
				localStorage.removeItem('authToken');
				localStorage.removeItem('userId');
				localStorage.removeItem('expirationDate');
				return {
					token: null,
					userId: null,
				};
			}
		},
		logout(state, action) {
			localStorage.removeItem('authToken');
			localStorage.removeItem('userId');
			localStorage.removeItem('expirationDate');
			return {
				token: null,
				userId: null,
			};
		},
		register(state, action) {
			state.token = action.payload.loginData.idToken;
			state.userId = action.payload.loginData.localId;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
