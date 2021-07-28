import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import CartItem from './CartItem/CartItem';
import CartTotal from './CartTotal/CartTotal';
import Button from '../../UI/Buttons/Button/Button';

import { sidebarActions } from '../../../store/sidebar/sidebarSlice';
import { checkoutActions } from '../../../store/checkout/checkoutSlice';
import styles from './CartItems.module.css';

const CartItems = props => {
	const cart = useSelector(state => state.cart);
	const authStore = useSelector(state => state.auth);

	const dispatch = useDispatch();
	const history = useHistory();

	const cartItems = cart.map(cartItem => (
		<CartItem
			product={cartItem}
			key={`${cartItem.sku}${cartItem.color}${cartItem.size}`}
		/>
	));

	const goToCreateYours = () => {
		dispatch(sidebarActions.closeSidebar({ sidebar: 'cart' }));
		history.push('/');
	};

	const goToOrderSummary = () => {
		if (!!authStore.token) {
			dispatch(checkoutActions.startCheckout());
			dispatch(sidebarActions.closeSidebar({ sidebar: 'cart' }));
			history.push('/order-summary');
		} else {
			dispatch(sidebarActions.closeSidebar({ sidebar: 'cart' }));
			history.push('/auth');
		}
	};

	const goToCheckout = () => {
		dispatch(sidebarActions.closeSidebar({ sidebar: 'cart' }));
		history.push('/checkout');
	};

	const emptyCart = (
		<>
			<p className='centered'>Your cart is empty...</p>
			<Button inversed onClick={goToCreateYours}>
				Create custom bikini set
			</Button>
		</>
	);
	const fullCart = (
		<>
			<ul className={styles.cartItems}>{cartItems}</ul>
			<CartTotal />
			<Button
				additionalClass={styles.checkoutButton}
				onClick={props.checkoutConfirmed ? goToCheckout : goToOrderSummary}>
				{props.checkoutConfirmed ? 'Proceed to checkout' : 'Finalize order'}
			</Button>
		</>
	);

	return <>{cart.length > 0 ? fullCart : emptyCart}</>;
};

CartItems.propTypes = {
	checkoutConfirmed: PropTypes.bool,
};

export default CartItems;
