import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem/CartItem';
import CartTotal from './CartTotal/CartTotal';
import Button from '../../UI/Buttons/Button/Button';

import { sidebarActions } from '../../../store/sidebar/sidebarSlice';
import styles from './CartItems.module.css';

const CartItems = _ => {
	const cart = useSelector(state => state.cart);
	const sidebarStore = useSelector(state => state.sidebar);

	const dispatch = useDispatch();
	const history = useHistory();

	const cartItems = cart.map(cartItem => (
		<CartItem
			product={cartItem}
			key={`${cartItem.sku}${cartItem.color}${cartItem.size}`}
		/>
	));

	const goToShop = _ => {
		history.push('/shop');
		dispatch(sidebarActions.closeSidebar({ sidebar: 'cart' }));
	};

	const emptyCart = (
		<>
			<p className='centered'>Your cart is empty...</p>
			<Button inversed onClick={goToShop}>
				Go to shop
			</Button>
		</>
	);
	const fullCart = (
		<>
			<ul className={styles.cartItems}>{cartItems}</ul>
			<CartTotal />
			<Button additionalClass={styles.checkoutButton} onClick={_ => {}}>
				Complete order
			</Button>
		</>
	);

	return <>{cart.length > 0 ? fullCart : emptyCart}</>;
};

export default CartItems;
