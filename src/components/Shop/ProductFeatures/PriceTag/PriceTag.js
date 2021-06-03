import styles from './PriceTag.module.css';
import calculateSalePrice from '../../../../utilities/calculateSalePrice';
import formatPrice from '../../../../utilities/formatPrice';

const PriceTag = props => {
	let salePrice = calculateSalePrice(
		props.product.price,
		props.product.sale.discount
	);

	let quantity = props.quantity;
	if (props.quantity === undefined) {
		quantity = 1;
	}

	return (
		<>
			{props.product.sale.onSale ? (
				<span className={styles.initialPrice}>
					<span className={styles.discountedPrice}>
						{formatPrice(props.product.price * quantity)}
					</span>{' '}
					<span className={styles.salePrice}>
						{formatPrice(salePrice * quantity)}
					</span>
				</span>
			) : (
				<span className={styles.initialPrice}>
					{formatPrice(salePrice * quantity)}
				</span>
			)}
		</>
	);
};

export default PriceTag;
