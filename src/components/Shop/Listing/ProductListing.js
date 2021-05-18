import { useEffect } from 'react';
import lodash from 'lodash';

import styles from './ProductListing.module.css';
import BANDEAU from '../../../dummy_products/top-bandeau';

import ProductCard from './ProductCard/ProductCard';

const ProductListing = props => {
	//TODO - add fetch from the database

	//Filters to accept: No of products - 'quantity' (number), 'featured' (boolean), 'category' (string)

	const products = lodash.cloneDeep(BANDEAU);
	const filteredProducts = products.filter(product => {
		if (props.featured && !product.featured) {
			console.log('featured filter');
			return false;
		}
		if (props.category && product.category !== props.category) {
			console.log('category filter');
			return false;
		}
		return true;
	});

	//Reduce number of products if necessary
	if (props.max < filteredProducts.length) {
		filteredProducts.splice(props.max);
	}

	let outputProducts = filteredProducts.map(product => (
		<ProductCard product={product} key={product.sku} />
	));

	return <div className={styles.productGrid}>{outputProducts}</div>;
};

export default ProductListing;
