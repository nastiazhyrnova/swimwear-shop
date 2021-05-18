import styles from './ProductCard.module.css';

import Label from './Label/Label';
import Button from '../../../UI/Buttons/Button/Button';

const ProductItem = props => {
	const formattedPrice = new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0,
	}).format(props.product.price);

	const openProductDetails = _ => {
		//TODO - add routing to the single product
	};

	return (
		<div className={styles.product} onClick={openProductDetails}>
			<Label product={props.product} />
			<div className={styles.imgContainer}>
				<img src={props.product.image} alt='img' />
			</div>
			<div className={styles.productDetails}>
				<span className={styles.productTitle}>{props.product.title}</span>
				<span className={styles.productColors}>
					{props.product.options.colors.length} colors
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
