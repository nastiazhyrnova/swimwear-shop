import React from 'react';
import { useSelector } from 'react-redux';
import arrayShuffle from 'array-shuffle';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard/ProductCard';
import Filters from './Filters/Filters';

import styles from './ProductListing.module.css';
import sortProducts from '../../../utilities/sortProducts';

const ProductListing = props => {
	const productsStore = useSelector(state => state.products);
	let outputProducts = 'No products found';

	//if products were fetched
	if (productsStore.products.length !== 0) {
		//FILTER
		const filteredProducts = productsStore.products.filter(product => {
			if (props.exclude && props.exclude === product.sku) {
				return false;
			}
			if (product.stock <= 0) {
				return false;
			}
			if (props.featured && !product.featured) {
				return false;
			}
			if (props.category && product.category !== props.category) {
				return false;
			}
			if (props.onSale && !product.sale.onSale) {
				return false;
			}
			return true;
		});

		//SORT (random by default)
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

	return (
		<div className={styles.listingContainer}>
			{props.showFilters && <Filters />}
			<div className={styles.productGrid}>{outputProducts}</div>
		</div>
	);
};

ProductListing.propTypes = {
	showFilters: PropTypes.bool,
	category: PropTypes.string,
	max: PropTypes.number,
	exclude: PropTypes.bool,
	featured: PropTypes.bool,
	onSale: PropTypes.bool,
	sort: PropTypes.shape({
		by: PropTypes.string.isRequired, //Options: 'price', 'popular', 'onSale' - to be added
		asc: PropTypes.bool,
	}),
};

export default React.memo(ProductListing);
