import { useState } from 'react';

import styles from './ShopNavItems.module.css';
import cartIcon from '../../../assets/icons/shopping-cart.svg';
import userIcon from '../../../assets/icons/user.svg';

import Cart from '../../Shop/Cart/Cart';

import HiddenButton from '../../UI/Buttons/HiddenButton/HiddenButton';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Backdrop from '../../UI/Backdrop/Backdrop';

const ShopNavItems = _ => {
	const [showCart, setShowCart] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);

	const openCart = _ => {
		setShowCart(true);
	};
	const closeCart = _ => {
		setShowCart(false);
	};

	const cart = (
		<>
			<Sidebar right>
				<Cart />
			</Sidebar>
			<Backdrop onClick={closeCart} />
		</>
	);

	return (
		<div className={styles.shopNav}>
			{showCart && cart}
			<HiddenButton label='Shopping Cart' onClick={openCart}>
				<img className={styles.icon} src={cartIcon} alt='Shopping Cart' />
				<span className={styles.circle}>5</span>
			</HiddenButton>
			<HiddenButton label='User Profile'>
				<img className={styles.icon} src={userIcon} alt='User Profile' />
			</HiddenButton>
		</div>
	);
};

export default ShopNavItems;
