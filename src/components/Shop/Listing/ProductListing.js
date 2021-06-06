import React from 'react';
import { useSelector } from 'react-redux';
import arrayShuffle from 'array-shuffle';

import ProductCard from './ProductCard/ProductCard';

import styles from './ProductListing.module.css';
import sortProducts from '../../../utilities/sortProducts';

//Filters to accept via props: No of products - 'quantity' (number), 'featured' (boolean), 'category' (string), 'onSale' (boolean), 'exclude'(string with product sku), 'sort' (object): {by: ['price', 'popular', ''], asc: boolean. (default - random)}

const ProductListing = props => {
	const productsStore = useSelector(state => state.products);
	let outputProducts = 'No products found';

	//if products were fetched
	if (productsStore.products.length !== 0) {
		//Filter products by filters passed in props:
		const filteredProducts = productsStore.products.filter(product => {
			//don't show if excluded
			if (props.exclude && props.exclude === product.sku) {
				return false;
			}
			//don't show if no stock
			if (product.stock <= 0) {
				return false;
			}
			//featured filter
			if (props.featured && !product.featured) {
				return false;
			}
			//category filter
			if (props.category && product.category !== props.category) {
				return false;
			}
			//onSale filter
			if (props.onSale && !product.sale.onSale) {
				return false;
			}
			return true;
		});

		//Sort filtered results (random by default)
		let sortedProducts;
		if (props.sort) {
			sortedProducts = sortProducts(
				filteredProducts,
				props.sort.asc,
				props.sort.by
			);
		} else {
			sortedProducts = arrayShuffle(filteredProducts);
		}

		//Reduce number of products if necessary
		if (props.max <= sortedProducts.length) {
			sortedProducts.splice(props.max);
		}

		outputProducts = sortedProducts.map(product => {
			return <ProductCard product={product} key={product.sku} />;
		});
	}

	return <div className={styles.productGrid}>{outputProducts}</div>;
};

export default React.memo(ProductListing);
