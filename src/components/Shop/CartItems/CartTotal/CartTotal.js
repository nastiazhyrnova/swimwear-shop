import { useSelector } from 'react-redux';

import {
	calculateSubtotal,
	calculateDiscountedTotal,
} from '../../../../utilities/calculateCartTotals';
import formatPrice from '../../../../utilities/formatPrice';
import styles from './CartTotal.module.css';

const CartTotal = props => {
	const cartStore = useSelector(state => state.cart);
	const productsStore = useSelector(state => state.products);

	const subtotal = calculateSubtotal(cartStore, productsStore.products);
	const discountedTotal = calculateDiscountedTotal(
		cartStore,
		productsStore.products
	);

	return (
		<>
			<div className={styles.totalContainer}>
				<hr />
				{subtotal !== discountedTotal && (
					<>
						<p className={styles.subtotal}>
							Subtotal: {formatPrice(subtotal)}{' '}
						</p>
						<p className={styles.discount}>
							Discount: -{formatPrice(subtotal - discountedTotal)}
						</p>
						<hr />
					</>
				)}

				<p className={styles.total}>
					Total:{' '}
					<strong className={styles.strong}>
						{' '}
						{formatPrice(discountedTotal)}{' '}
					</strong>
					<span className={styles.vat}>Taxes included</span>
				</p>
			</div>
		</>
	);
};

export default CartTotal;
