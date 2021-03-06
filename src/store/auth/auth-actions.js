import { authActions } from './authSlice';
import { loadingActions } from '../loading/loadingSlice';
import { autoHideNotificationAction } from '../notification/notification-actions';
import { calculateExpirationTime } from './authSlice';

export const authAction = (actionType, userData) => async dispatch => {
	const fetchData = async userData => {
		const response = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:${
				actionType === 'register' ? 'signUp' : 'signInWithPassword'
			}?key=${process.env.REACT_APP_SECRET_KEY}`,
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
		dispatch(
			autoHideNotificationAction(
				`${
					actionType === 'register'
						? 'Thanks for registering. You are logged in now.'
						: 'You are logged in now.'
				}`
			)
		);
	} catch (err) {
		dispatch(loadingActions.stopLoading());
		dispatch(autoHideNotificationAction(err.toString()));
	}
};

export const autoLogoutAction = () => {
	return async dispatch => {
		setTimeout(() => {
			dispatch(authActions.logout());
			dispatch(autoHideNotificationAction('You have been logged out.'));
		}, calculateExpirationTime(localStorage.getItem('expirationDate')));
	};
};
