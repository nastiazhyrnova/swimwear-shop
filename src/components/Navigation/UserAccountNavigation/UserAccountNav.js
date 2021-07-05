import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import HiddenButton from '../../UI/Buttons/HiddenButton/HiddenButton';

import { authActions } from '../../../store/auth/authSlice';
import { sidebarActions } from '../../../store/sidebar/sidebarSlice';
import styles from './UserAccountNav.module.css';

const UserAccountNav = props => {
	const dispatch = useDispatch();
	const history = useHistory();

	const logout = _ => {
		dispatch(authActions.logout());
		history.push('/');
	};

	const changePassword = _ => {
		history.push('/change-password');
		dispatch(sidebarActions.closeSidebar());
	};

	return (
		<>
			<div>User Account Nav menu</div>

			<HiddenButton onClick={changePassword} label='Change password'>
				Change Password
			</HiddenButton>
			<HiddenButton onClick={logout} label='LogOut'>
				Log Out
			</HiddenButton>
		</>
	);
};

export default UserAccountNav;
