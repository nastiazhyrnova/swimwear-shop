import lodash from 'lodash';

import styles from './ProductListing.module.css';
import DUMMY_PRODUCTS from '../../../dummy_products/DUMMY_PRODUCTS';

import ProductCard from './ProductCard/ProductCard';

//Filters to accept via props: No of products - 'quantity' (number), 'featured' (boolean), 'category' (string), 'onSale' (boolean)
const ProductListing = props => {
	//TODO - add fetch from the database

	//Filter products by filters passed in props:
	const products = lodash.cloneDeep(DUMMY_PRODUCTS);
	const filteredProducts = products.filter(product => {
		if (props.featured && !product.featured) {
			console.log('featured filter');
			return false;
		}
		if (props.category && product.category !== props.category) {
			console.log('category filter');
			return false;
		}
		if (props.onSale && !product.sale.onSale) {
			return false;
		}
		return true;
	});

	//Reduce number of products if necessary
	if (props.max <= filteredProducts.length) {
		filteredProducts.splice(props.max);
	}

	let outputProducts = filteredProducts.map(product => (
		<ProductCard product={product} key={product.sku} />
	));

	return <div className={styles.productGrid}>{outputProducts}</div>;
};

export default ProductListing;
