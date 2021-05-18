import styles from './ProductCard.module.css';

import Button from '../../../UI/Buttons/Button/Button';

const ProductItem = props => {
	const formattedPrice = new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0,
	}).format(props.data.price);

	const openProductDetails = _ => {
		//TODO - add routing to the single product
	};

	return (
		<div className={styles.product} onClick={openProductDetails}>
			<img src={props.data.image} alt='img' />
			<div className={styles.productDetails}>
				<span className={styles.productTitle}>{props.data.title}</span>
				<span className={styles.productColors}>
					{props.data.options.colors.length} colors
				</span>
			</div>
			<span className={styles.productPrice}>{formattedPrice}</span>
			<Button additionalClass={styles.button} onClick={openProductDetails}>
				See Details
			</Button>
		</div>
	);
};

export default ProductItem;
