import { useState } from 'react';

import styles from './ShopNavItems.module.css';
import cartIcon from '../../../assets/icons/shopping-cart.svg';
import userIcon from '../../../assets/icons/user.svg';

import Cart from '../../../pages/Sidebar/Cart';
import UserAccount from '../../../pages/Sidebar/UserAccount';
import HiddenButton from '../../UI/Buttons/HiddenButton/HiddenButton';
import Sidebar from '../../UI/Sidebar/Sidebar';

const ShopNavItems = _ => {
	const [showCart, setShowCart] = useState(false);
	const [showUserAccount, setShowUserAccount] = useState(false);

	//Cart Sidebar
	const openCart = _ => {
		setShowCart(true);
		setShowUserAccount(false);
	};
	const closeCart = _ => {
		setShowCart(false);
		setShowUserAccount(false);
	};

	const cart = (
		<Sidebar right open={openCart} closeFunc={closeCart}>
			<Cart />
		</Sidebar>
	);

	// User Account Sidebar
	const openUserAccount = _ => {
		setShowUserAccount(true);
		setShowCart(false);
	};
	const closeUserAccount = _ => {
		setShowUserAccount(false);
		setShowCart(false);
	};

	const userAccount = (
		<Sidebar right closeFunc={closeUserAccount}>
			<UserAccount />
		</Sidebar>
	);

	return (
		<div className={styles.shopNav}>
			{showCart && cart}
			{showUserAccount && userAccount}
			<HiddenButton label='Shopping Cart' onClick={openCart}>
				<img className={styles.icon} src={cartIcon} alt='Shopping Cart' />
				<span className={styles.circle}>5</span>
			</HiddenButton>
			<HiddenButton label='User Account' onClick={openUserAccount}>
				<img className={styles.icon} src={userIcon} alt='User Account' />
			</HiddenButton>
		</div>
	);
};

export default ShopNavItems;
