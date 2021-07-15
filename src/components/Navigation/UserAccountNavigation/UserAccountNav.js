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

	// const openCart = _ => {
	// 	dispatch(sidebarActions.openSidebar({ sidebar: 'cart' }));
	// };

	const openOrders = _ => {
		dispatch(sidebarActions.closeSidebar());
		history.push('/orders');
	};

	return (
		<>
			<ul className={styles.navList}>
				{/* <li>
					<HiddenButton onClick={openCart} label='Cart'>
						Cart
					</HiddenButton>
				</li> */}
				<li>
					<HiddenButton onClick={openOrders} label='Orders'>
						Your Orders
					</HiddenButton>
				</li>
				<li>
					<HiddenButton onClick={logout} label='LogOut'>
						Log Out
					</HiddenButton>
				</li>
			</ul>
		</>
	);
};

export default UserAccountNav;
