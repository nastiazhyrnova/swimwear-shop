import styles from './PriceTag.module.css';

const PriceTag = props => {
	const formattedInitialPrice = new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0,
	}).format(props.product.price);

	const salePrice =
		props.product.price -
		props.product.price * (props.product.sale.discount / 100);

	const formattedSalePrice = new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0,
	}).format(salePrice);

	return (
		<>
			{props.product.sale.onSale ? (
				<span className={styles.initialPrice}>
					<span className={styles.discountedPrice}>
						{formattedInitialPrice}
					</span>{' '}
					<span className={styles.salePrice}>{formattedSalePrice}</span>
				</span>
			) : (
				<span className={styles.initialPrice}>{formattedInitialPrice}</span>
			)}
		</>
	);
};

export default PriceTag;
