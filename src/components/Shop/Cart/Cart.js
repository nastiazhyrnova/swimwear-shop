import styles from './Cart.module.css';
import logo from '../../../assets/logo-with-text-horizontal.svg';

const Cart = props => {
	return (
		<div className={styles.cart}>
			<h4>Your Shopping Cart</h4>
			<p>//Items</p>
			<p>//CTA etc...</p>
			<img src={logo} alt='Logo' />
		</div>
	);
};

export default Cart;
