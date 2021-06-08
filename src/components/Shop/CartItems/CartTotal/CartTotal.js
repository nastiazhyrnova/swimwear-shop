import { useSelector } from 'react-redux';

import calculateSalePrice from '../../../../utilities/calculateSalePrice';
import formatPrice from '../../../../utilities/formatPrice';
import styles from './CartTotal.module.css';

const CartTotal = props => {
	const cartStore = useSelector(state => state.cart);
	const productsStore = useSelector(state => state.products);

	const subtotal = cartStore
		.map(cartItem => {
			const productInfo = productsStore.products.find(
				product => product.sku === cartItem.sku
			);
			return cartItem.quantity * productInfo.price;
		})
		.reduce((accumulator, currentValue) => accumulator + currentValue);

	const discountedTotal = cartStore
		.map(cartItem => {
			const productInfo = productsStore.products.find(
				product => product.sku === cartItem.sku
			);
			let discountedPrice = productInfo.price;
			if (productInfo.sale.onSale) {
				discountedPrice = calculateSalePrice(
					productInfo.price,
					productInfo.sale.discount
				);
			}
			return cartItem.quantity * discountedPrice;
		})
		.reduce((accumulator, currentValue) => accumulator + currentValue);

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
					<p className={styles.vat}>Taxes included</p>
				</p>
			</div>
		</>
	);
};

export default CartTotal;
