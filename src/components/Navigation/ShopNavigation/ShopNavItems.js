import HiddenButton from '../../UI/Buttons/HiddenButton/HiddenButton';

import styles from './ShopNavItems.module.css';
import cartIcon from '../../../assets/icons/shopping-cart.svg';
import userIcon from '../../../assets/icons/user.svg';

const ShopNavItems = () => {
	return (
		<div className={styles.shopNav}>
			<HiddenButton label='Shopping Cart'>
				<img className={styles.icon} src={cartIcon} alt='Shopping Cart' />
			</HiddenButton>
			<HiddenButton label='User Profile'>
				<img className={styles.icon} src={userIcon} alt='User Profile' />
			</HiddenButton>
		</div>
	);
};

export default ShopNavItems;
