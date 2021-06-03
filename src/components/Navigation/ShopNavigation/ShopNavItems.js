import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './ShopNavItems.module.css';
import cartIcon from '../../../assets/icons/shopping-cart.svg';
import userIcon from '../../../assets/icons/user.svg';

import Cart from '../../../pages/Sidebar/Cart';
import UserAccount from '../../../pages/Sidebar/UserAccount';
import HiddenButton from '../../UI/Buttons/HiddenButton/HiddenButton';
import Sidebar from '../../UI/Sidebar/Sidebar';

const ShopNavItems = _ => {
	const [showCartSidebar, setShowCartSidebar] = useState(false);
	const [showUserAccountSidebar, setShowUserAccountSidebar] = useState(false);
	const cartStore = useSelector(state => state.cart);

	//Cart Sidebar
	const openCartSidebar = _ => {
		setShowCartSidebar(true);
		setShowUserAccountSidebar(false);
	};
	const closeCartSidebar = _ => {
		setShowCartSidebar(false);
		setShowUserAccountSidebar(false);
	};

	const cartSidebar = (
		<Sidebar right open={openCartSidebar} closeFunc={closeCartSidebar}>
			<Cart />
		</Sidebar>
	);

	// User Account Sidebar
	const openUserAccount = _ => {
		setShowUserAccountSidebar(true);
		setShowCartSidebar(false);
	};
	const closeUserAccount = _ => {
		setShowUserAccountSidebar(false);
		setShowCartSidebar(false);
	};

	const userAccountSidebar = (
		<Sidebar right closeFunc={closeUserAccount}>
			<UserAccount />
		</Sidebar>
	);

	let cartTotalQuantity = cartStore.length;

	if (cartStore.length > 0) {
		cartTotalQuantity = cartStore
			.map(cartItem => cartItem.quantity)
			.reduce((accumulator, currentValue) => accumulator + currentValue);
	}

	return (
		<div className={styles.shopNav}>
			{showCartSidebar && cartSidebar}
			{showUserAccountSidebar && userAccountSidebar}
			<HiddenButton label='Shopping Cart' onClick={openCartSidebar}>
				<img className={styles.icon} src={cartIcon} alt='Shopping Cart' />
				<span className={styles.circle}>{cartTotalQuantity}</span>
			</HiddenButton>
			<HiddenButton label='User Account' onClick={openUserAccount}>
				<img className={styles.icon} src={userIcon} alt='User Account' />
			</HiddenButton>
		</div>
	);
};

export default ShopNavItems;
