import { useHistory } from 'react-router-dom';
import styles from './ProductCard.module.css';

import Label from './Label/Label';
import PriceTag from './PriceTag/PriceTag';
import Button from '../../../UI/Buttons/Button/Button';

const ProductItem = props => {
	const history = useHistory();
	const openProductDetails = _ => {
		history.push(`/shop/${props.product.sku}`);
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
			<PriceTag product={props.product} />
			<Button additionalClass={styles.button} onClick={openProductDetails}>
				See Details
			</Button>
		</div>
	);
};

export default ProductItem;
