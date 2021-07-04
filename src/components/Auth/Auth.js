import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import Input from '../UI/Input/Input';
import Button from '../UI/Buttons/Button/Button';

import { authAction } from '../../store/auth/auth-actions';
import styles from './Auth.module.css';

const Auth = props => {
	const [registered, setRegistered] = useState(true);
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const dispatch = useDispatch();
	const history = useHistory();

	const loginButton = (
		<Button onClick={_ => setRegistered(false)}>Register</Button>
	);

	const registerButton = (
		<Button onClick={_ => setRegistered(true)}>Log In</Button>
	);

	const submit = _ => {
		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;

		if (registered) {
			dispatch(authAction('login', { email, password }));
		} else {
			//register new user
			dispatch(authAction('register', { email, password }));
		}
		history.goBack();
		// if (props.page) {
		// 	history.push('/');
		// }
	};

	return (
		<div className={styles.authPage}>
			<div>
				<div className={styles.inputContainer}>
					<Input
						name='email'
						title='Email'
						type='email'
						min='8'
						required={true}
						label
						ref={emailInputRef}
					/>
					<Input
						name='password'
						title='Password'
						type='password'
						min='6'
						max='15'
						required={true}
						label
						ref={passwordInputRef}
					/>
				</div>
				<div>
					<Button inversed onClick={submit}>
						{registered ? 'Log In' : 'Register'}
					</Button>
				</div>
			</div>
			<div>
				<p>
					{registered ? "Don't have an account?" : 'Already have an account?'}
				</p>
				{registered ? loginButton : registerButton}
			</div>
		</div>
	);
};

export default Auth;
