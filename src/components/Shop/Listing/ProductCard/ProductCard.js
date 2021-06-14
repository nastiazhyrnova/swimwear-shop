import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Label from '../../ProductFeatures/Label/Label';
import PriceTag from '../../ProductFeatures/PriceTag/PriceTag';
import Button from '../../../UI/Buttons/Button/Button';

import styles from './ProductCard.module.css';
import productImages from '../../../../assets/products/productImages';

const ProductCard = props => {
	const productsStore = useSelector(state => state.products);
	const history = useHistory();
	let output = 'No product found';

	if (
		productsStore.products.length !== 0 &&
		productsStore.attributes.color.length !== 0
	) {
		const productImage =
			productImages[`${props.product.category}`][`${props.product.sku}`][
				`${props.product.defaultColor}`
			];
		const openProductDetails = _ => {
			history.push(`/shop/${props.product.category}/${props.product.sku}`);
		};

		output = (
			<article className={styles.product} onClick={openProductDetails}>
				<Label product={props.product} />
				<div className={styles.imgContainer}>
					<img src={productImage} alt={props.product.title} />
				</div>
				<div className={styles.productDetails}>
					<span className={styles.productTitle}>{props.product.title}</span>
					<span className={styles.productColors}>
						{productsStore.attributes.color.length} colors
					</span>
				</div>
				<PriceTag product={props.product} />
				<Button additionalClass={styles.button} onClick={openProductDetails}>
					See Details
				</Button>
			</article>
		);
	}

	return <>{output}</>;
};

ProductCard.propTypes = {};

export default ProductCard;
