import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './OrderProduct.module.css';

const OrderProduct = props => {
	const productsStore = useSelector(state => state.products);
	let productDetails;
	if (props.sku) {
		productDetails = productsStore.products.find(
			product => product.sku === props.sku
		);
	}

	console.log(productDetails);
	return (
		<div className={styles.productContainer}>
			<span className={styles.title}>
				{productDetails ? productDetails.title : 'Title'}
			</span>
			<span className={styles.color}>{props.color}</span>
			<span>{props.size}</span>
			<span>{props.quantity}</span>
		</div>
	);
};

OrderProduct.propTypes = {};

export default OrderProduct;
