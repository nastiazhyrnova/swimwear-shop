import { notificationActions } from './notificationSlice';

export const autoHideNotificationAction = message => {
	return async dispatch => {
		dispatch(notificationActions.show({ message: message }));
		setTimeout(() => {
			dispatch(notificationActions.hide());
		}, 5000);
	};
};
