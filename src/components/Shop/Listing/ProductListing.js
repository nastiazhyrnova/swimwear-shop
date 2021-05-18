import { useEffect } from 'react';
import lodash from 'lodash';

import styles from './ProductListing.module.css';
import BANDEAU from '../../../dummy_products/top-bandeau';

import ProductCard from './ProductCard/ProductCard';

const ProductListing = props => {
	//TODO - add fetch from the database

	//Filters to accept: No of products - 'quantity' (number), 'featured' (boolean), 'category' (array of strings)

	const products = lodash.cloneDeep(BANDEAU);

	if (props.featured) {
		//apply featured filter
	}
	if (props.category) {
		//filter products by category
	}
	if (props.quantity) {
		//reduce objects quantity
	}

	let outputProducts = products.map(product => (
		<ProductCard data={product} key={product.sku} />
	));

	return <div className={styles.productGrid}>{outputProducts}</div>;
};

export default ProductListing;
