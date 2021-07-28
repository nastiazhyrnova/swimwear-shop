import Auth from '../components/Auth/Auth';

const AuthPage = () => {
	return (
		<>
			<div className='pageWithPadding'>
				<h1>Log in or register</h1>
				<br />
				<br />
				<Auth page />
			</div>
		</>
	);
};

export default AuthPage;
