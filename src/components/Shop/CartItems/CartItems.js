import { useSelector } from 'react-redux';

import CartItem from './CartItem/CartItem';
import CartTotal from './CartTotal/CartTotal';
import Button from '../../UI/Buttons/Button/Button';

import styles from './CartItems.module.css';

const CartItems = () => {
	const cart = useSelector(state => state.cart);

	const cartItems = cart.map(cartItem => (
		<CartItem
			product={cartItem}
			key={`${cartItem.sku}${cartItem.color}${cartItem.size}`}
		/>
	));

	const emptyCart = (
		<>
			<p className='centered'>Your cart is empty...</p>
			<Button inversed>Go to shop</Button>
		</>
	);
	const fullCart = (
		<>
			<ul className={styles.cartItems}>{cartItems}</ul>
			<CartTotal />
			<Button additionalClass={styles.checkoutButton}>Complete order</Button>
		</>
	);

	return <>{cart.length > 0 ? fullCart : emptyCart}</>;
};

export default CartItems;
