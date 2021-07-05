import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

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

	const submit = e => {
		e.preventDefault();
		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;

		if (registered) {
			dispatch(authAction('login', { email, password }));
		} else {
			//register new user
			dispatch(authAction('register', { email, password }));
		}
	};

	return (
		<>
			<div className={styles.authPage}>
				<form onSubmit={submit}>
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
						<Button inversed>{registered ? 'Log In' : 'Register'}</Button>
					</div>
				</form>
				<div>
					<p>
						{registered ? "Don't have an account?" : 'Already have an account?'}
					</p>
					{registered ? loginButton : registerButton}
				</div>
			</div>
		</>
	);
};

export default Auth;
