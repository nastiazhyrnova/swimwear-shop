import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './ProductCard.module.css';
import productImages from '../../../../assets/products/productImages';

import Label from '../../ProductFeatures/Label/Label';
import PriceTag from '../../ProductFeatures/PriceTag/PriceTag';
import Button from '../../../UI/Buttons/Button/Button';

const ProductItem = props => {
	const productsStore = useSelector(state => state.products);

	const history = useHistory();
	const openProductDetails = _ => {
		history.push(`/shop/${props.product.category}/${props.product.sku}`);
	};

	const productImage =
		productImages[`${props.product.category}`][`${props.product.sku}`][
			`${props.product.defaultColor}`
		];

	return (
		<div className={styles.product} onClick={openProductDetails}>
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
		</div>
	);
};

export default ProductItem;
