import { useSelector } from 'react-redux';
import styles from './CartItems.module.css';
import CartItem from './CartItem/CartItem';

const CartItems = () => {
	const cart = useSelector(state => state.cart);

	const cartItems = cart.map(cartItem => (
		<CartItem
			product={cartItem}
			key={`${cartItem.sku}${cartItem.color}${cartItem.size}`}
		/>
	));
	return (
		<>
			<ul className={styles.cartItems}>{cartItems}</ul>
			<p>Total: </p>
			button....
		</>
	);
};

export default CartItems;
