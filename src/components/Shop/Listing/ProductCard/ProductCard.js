import { useHistory } from 'react-router-dom';
import styles from './ProductCard.module.css';

import Label from '../../ProductFeatures/Label/Label';
import PriceTag from '../../ProductFeatures/PriceTag/PriceTag';
import Button from '../../../UI/Buttons/Button/Button';

const ProductItem = props => {
	const history = useHistory();
	const openProductDetails = _ => {
		history.push(`/shop/${props.product.category}/${props.product.sku}`);
	};

	return (
		<div className={styles.product} onClick={openProductDetails}>
			<Label product={props.product} />
			<div className={styles.imgContainer}>
				<img src={props.product.defaultImage} alt='img' />
			</div>
			<div className={styles.productDetails}>
				<span className={styles.productTitle}>{props.product.title}</span>
				<span className={styles.productColors}>
					{props.product.options.colors.length} colors
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
