import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard/ProductCard';
import Filters from './Filters/Filters';

import styles from './ProductListing.module.css';
import sortProducts from '../../../utilities/sortProducts';
import { cloneDeep } from 'lodash';

const ProductListing = props => {
	const productsStore = useSelector(state => state.products);
	const shopFiltersStore = useSelector(state => state.shopFilters);

	let outputProducts = 'No products found';

	if (productsStore.products.length !== 0) {
		//FILTER
		const filteredProducts = productsStore.products.filter(product => {
			if (props.excludeSKU && props.excludeSKU === product.sku) {
				return false;
			}
			if (product.stock <= 0) {
				return false;
			}
			if (props.featured && !product.featured) {
				return false;
			}
			if (props.category && props.category !== product.category) {
				console.log('products sorting by category');
				return false;
			}
			if (props.onSale && !product.sale.onSale) {
				return false;
			}
			return true;
		});

		//SORT
		let sortedProducts;
		if (props.sort) {
			sortedProducts = sortProducts(
				filteredProducts,
				props.sort.asc,
				props.sort.by
			);
		} else {
			sortedProducts = filteredProducts;
		}

		//Reduce number of products if necessary
		if (props.max <= sortedProducts.length) {
			sortedProducts.splice(props.max);
		}

		outputProducts = sortedProducts.map(product => {
			return (
				<ProductCard
					filterColor={props.filterColor}
					product={product}
					key={product.sku}
				/>
			);
		});
	}

	return (
		<div className={styles.listingContainer}>
			{/* {props.showFilters && (
				<Filters
					sort={({ by, asc }) => getSortingCriteria({ by, asc })}
					filter={filterShopHandler}
				/>
			)} */}
			<div className={styles.productGrid}>{outputProducts}</div>
		</div>
	);
};

ProductListing.propTypes = {
	// showFilters: PropTypes.bool,
	category: PropTypes.string,
	colorFilter: PropTypes.string,
	max: PropTypes.number,
	excludeSKU: PropTypes.string,
	featured: PropTypes.bool,
	onSale: PropTypes.bool,
	sort: PropTypes.shape({
		by: PropTypes.string, //Options: 'price', 'popular', to be added: 'onSale
		asc: PropTypes.bool,
	}),
};

export default React.memo(ProductListing);
