import Input from '../../UI/Input/Input';

const Login = () => {
	return (
		<div>
			<Input
				name='email'
				title='Email'
				type='email'
				min='8'
				required={true}
				label
			/>
			<Input
				name='password'
				title='Password'
				type='password'
				min='6'
				max='15'
				required={true}
				label
			/>
		</div>
	);
};

export default Login;
