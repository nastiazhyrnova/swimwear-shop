import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Buttons/Button/Button';

import { changePasswordAction } from '../../../store/auth/auth-actions';
import { notificationActions } from '../../../store/notification/notificationSlice';
import { autoHideNotificationAction } from '../../../store/notification/notification-actions';
import styles from '../Auth.module.css';

const ChangePassword = _ => {
	const newPasswordRef = useRef();
	const newPasswordRepeatRef = useRef();
	const dispatch = useDispatch();

	const changePassword = e => {
		e.preventDefault();
		if (newPasswordRef.current.value === newPasswordRepeatRef.current.value) {
			dispatch(changePasswordAction(newPasswordRef.current.value));
		} else {
			dispatch(
				autoHideNotificationAction(
					"Passwords don't match. Please enter same passwords"
				)
			);
		}
	};

	return (
		<form onSubmit={changePassword} className={styles.authPage}>
			<div className={styles.inputContainer}>
				<Input
					name='newPassword'
					title='New password'
					type='password'
					min='6'
					max='15'
					required={true}
					label
					ref={newPasswordRef}
				/>
				<Input
					name='repeatNewPassword'
					title='Repeat new password'
					type='password'
					min='6'
					max='15'
					required={true}
					label
					ref={newPasswordRepeatRef}
				/>
			</div>
			<Button inversed>Change password </Button>
		</form>
	);
};

export default ChangePassword;
