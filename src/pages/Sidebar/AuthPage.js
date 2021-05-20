import styles from './AuthPage.module.css';
import Button from '../../components/UI/Buttons/Button/Button';

const AuthPage = _ => {
	return (
		<div className={styles.authPage}>
			<Button inversed onClick={_ => {}}>
				Log In
			</Button>
			<p>Don't have an account?</p>
			<Button onClick={_ => {}}>Register</Button>
		</div>
	);
};

export default AuthPage;
