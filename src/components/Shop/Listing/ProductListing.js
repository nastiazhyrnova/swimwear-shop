import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import arrayShuffle from 'array-shuffle';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard/ProductCard';
import Filters from './Filters/Filters';

import styles from './ProductListing.module.css';
import sortProducts from '../../../utilities/sortProducts';

const ProductListing = props => {
	const productsStore = useSelector(state => state.products);

	const [filters, setFilters] = useState({
		featured: false,
		onSale: false,
		exclude: {
			exclude: false,
			product: null,
		},
		category: {
			sort: false,
			value: null,
		},
	});

	const [sorting, setSorting] = useState({
		by: null,
		asc: true,
	});

	let outputProducts = 'No products found';

	//when products are fetched, set sorting according to props
	useEffect(
		_ => {
			if (productsStore.products.length !== 0) {
				setFilters({
					featured: !!props.featured,
					onSale: !!props.onSale,
					exclude: {
						exclude: !!props.exclude,
						sku: props.exclude,
					},
					category: {
						sort: !!props.category,
						value: props.category,
					},
				});
			}
		},
		[
			productsStore.products.length,
			props.exclude,
			props.featured,
			props.onSale,
			props.category,
		]
	);

	if (productsStore.products.length !== 0) {
		//FILTER
		const filteredProducts = productsStore.products.filter(product => {
			if (filters.exclude.exclude && filters.exclude.sku === product.sku) {
				return false;
			}
			if (product.stock <= 0) {
				return false;
			}
			if (filters.featured && !product.featured) {
				return false;
			}
			if (filters.category.sort && filters.category.value !== props.category) {
				return false;
			}
			if (filters.onSale && !product.sale.onSale) {
				return false;
			}
			return true;
		});

		//set sorting criteria in state
		if (props.sort) {
			setSorting({ by: props.sort.by, asc: props.sort.asc });
		}

		//SORT (random by default)
		let sortedProducts;
		if (sorting.by) {
			sortedProducts = sortProducts(filteredProducts, sorting.asc, sorting.by);
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

	const getSortingCriteria = ({ by, asc }) => {
		setSorting({ by: by, asc: asc });
	};

	return (
		<div className={styles.listingContainer}>
			{props.showFilters && (
				<Filters
					sort={({ by, asc }) => getSortingCriteria({ by, asc })}
					filter={_ => {}}
				/>
			)}
			<div className={styles.productGrid}>{outputProducts}</div>
		</div>
	);
};

ProductListing.propTypes = {
	showFilters: PropTypes.bool,
	category: PropTypes.string,
	max: PropTypes.number,
	exclude: PropTypes.string,
	featured: PropTypes.bool,
	onSale: PropTypes.bool,
	sort: PropTypes.shape({
		by: PropTypes.string.isRequired, //Options: 'price', 'popular', to be added: 'onSale
		asc: PropTypes.bool,
	}),
	colorFilter: PropTypes.string,
};

export default React.memo(ProductListing);
