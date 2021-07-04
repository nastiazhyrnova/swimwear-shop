import { loadingActions } from '../loading/loadingSlice';
import { authActions } from './authSlice';

const API = 'AIzaSyCkGzADyUrE43jqsl0gLMAL4J4QUAG5oyI';

export const authAction = (actionType, userData) => {
	return async dispatch => {
		const fetchData = async userData => {
			const response = await fetch(
				`https://identitytoolkit.googleapis.com/v1/accounts:${
					actionType === 'register' ? 'signUp' : 'signInWithPassword'
				}?key=${API}`,
				{
					method: 'POST',
					body: JSON.stringify({
						email: userData.email,
						password: userData.password,
						returnSecureToken: true,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (!response.ok) {
				throw new Error(
					`Couldn't ${
						actionType === 'register' ? 'register new ' : 'log in'
					} user`
				);
			} else {
				const data = await response.json();
				return data;
			}
		};

		try {
			dispatch(loadingActions.startLoading());
			const fetchedData = await fetchData(userData);

			const expirationTime = new Date(
				new Date().getTime() + fetchedData.expiresIn * 1000
			);

			localStorage.setItem('authToken', fetchedData.idToken);
			localStorage.setItem('userId', fetchedData.localId);
			localStorage.setItem('expirationDate', expirationTime);

			if (actionType === 'register') {
				dispatch(
					authActions.register({
						loginData: fetchedData,
					})
				);
			} else if (actionType === 'login') {
				dispatch(
					authActions.login({
						loginData: fetchedData,
					})
				);
			}

			dispatch(loadingActions.stopLoading());
		} catch (err) {
			dispatch(loadingActions.stopLoading());
			console.log(err);
		}
	};
};
