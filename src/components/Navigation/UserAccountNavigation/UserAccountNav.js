import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import HiddenButton from '../../UI/Buttons/HiddenButton/HiddenButton';

import { authActions } from '../../../store/auth/authSlice';
import styles from './UserAccountNav.module.css';

const UserAccountNav = props => {
	const dispatch = useDispatch();
	const history = useHistory();

	const logout = _ => {
		dispatch(authActions.logout());

		history.push('/');
	};

	return (
		<>
			<div>User Account Nav menu</div>
			<div>User Account Nav menu</div>
			<div>User Account Nav menu</div>
			<div>Change password</div>
			<HiddenButton onClick={logout} label='LogOut'>
				Log Out
			</HiddenButton>
		</>
	);
};

export default UserAccountNav;
