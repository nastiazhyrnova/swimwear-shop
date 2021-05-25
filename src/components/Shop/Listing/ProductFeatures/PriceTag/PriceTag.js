import styles from './PriceTag.module.css';
import formatPrice from '../../../../../utilities/formatPrice';

const PriceTag = props => {
	const salePrice =
		props.product.price -
		props.product.price * (props.product.sale.discount / 100);

	return (
		<>
			{props.product.sale.onSale ? (
				<span className={styles.initialPrice}>
					<span className={styles.discountedPrice}>
						{formatPrice(props.product.price)}
					</span>{' '}
					<span className={styles.salePrice}>{formatPrice(salePrice)}</span>
				</span>
			) : (
				<span className={styles.initialPrice}>{formatPrice(salePrice)}</span>
			)}
		</>
	);
};

export default PriceTag;
