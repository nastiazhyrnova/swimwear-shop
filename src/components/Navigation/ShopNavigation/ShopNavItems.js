import { useSelector, useDispatch } from 'react-redux';
import { sidebarActions } from '../../../store/sidebar/sidebarSlice';

import Cart from '../../../pages/Sidebar/Cart';
import UserAccount from '../../../pages/Sidebar/UserAccount';
import HiddenButton from '../../UI/Buttons/HiddenButton/HiddenButton';
import Sidebar from '../../UI/Sidebar/Sidebar';

import styles from './ShopNavItems.module.css';
import cartIcon from '../../../assets/icons/shopping-cart.svg';
import userIcon from '../../../assets/icons/user.svg';

const ShopNavItems = _ => {
	const cartStore = useSelector(state => state.cart);
	const sidebarStore = useSelector(state => state.sidebar);
	const dispatch = useDispatch();

	const closeAnySidebar = _ => {
		dispatch(sidebarActions.closeSidebar());
	};

	//Cart Sidebar
	const openCartSidebar = _ => {
		dispatch(sidebarActions.openSidebar({ sidebar: 'cart' }));
	};
	const cartSidebar = (
		<Sidebar right open={openCartSidebar} closeFunc={closeAnySidebar}>
			<Cart />
		</Sidebar>
	);

	//User Account Sidebar
	const openUserAccountSidebar = _ => {
		dispatch(sidebarActions.openSidebar({ sidebar: 'userAccount' }));
	};
	const userAccountSidebar = (
		<Sidebar right closeFunc={closeAnySidebar}>
			<UserAccount />
		</Sidebar>
	);

	let cartProductsQuantity = 0;

	if (cartStore.length > 0) {
		cartProductsQuantity = cartStore
			.map(cartItem => cartItem.quantity)
			.reduce((accumulator, currentValue) => accumulator + currentValue);
	}

	return (
		<div className={styles.shopNav}>
			{sidebarStore.cart.show && cartSidebar}
			{sidebarStore.userAccount.show && userAccountSidebar}
			<HiddenButton label='Shopping Cart' onClick={openCartSidebar}>
				<img className={styles.icon} src={cartIcon} alt='Shopping Cart' />
				<span className={styles.circle}>{cartProductsQuantity}</span>
			</HiddenButton>
			<HiddenButton label='User Account' onClick={openUserAccountSidebar}>
				<img className={styles.icon} src={userIcon} alt='User Account' />
			</HiddenButton>
		</div>
	);
};

export default ShopNavItems;
