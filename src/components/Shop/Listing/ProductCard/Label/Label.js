import styles from './Label.module.css';

const Label = props => {
	return (
		<>
			{props.product.sale.onSale && (
				<span
					className={styles.sale}>{`-${props.product.sale.discount}%`}</span>
			)}
			{props.product.bestseller && (
				<span className={styles.bestseller}>BESTSELLER</span>
			)}
		</>
	);
};

export default Label;
