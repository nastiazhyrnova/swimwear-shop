import React, { useEffect, useReducer, useMemo } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import lodash from 'lodash';

import singleProductReducer from './singleProductReducer';
import styles from './SingleProduct.module.css';

import ProductListing from '../Listing/ProductListing';
import SingleProductCard from './SingleProductCard/SingleProductCard';

import DUMMY_PRODUCTS from '../../../dummy_products/DUMMY_PRODUCTS';

const SingleProduct = _ => {
	const history = useHistory();
	const { id } = useParams();

	const product = useMemo(
		_ =>
			lodash.cloneDeep(DUMMY_PRODUCTS.filter(product => product.sku === id)[0]),
		[id]
	);

	const [state, dispatch] = useReducer(singleProductReducer, {
		sku: id,
		color: product.defaultColor,
		size: null,
		quantity: 1,
	});

	useEffect(() => {
		dispatch({ type: 'SET_PRODUCT', product: product });
		window.scrollTo(0, 0);
	}, [id, product]);

	const currentProductColorVariation = product.options.colors.find(
		color => color.sku === state.color
	);

	const addToCart = _ => {
		console.log(state);
	};
	return (
		<main>
			<div className={styles.breadcrumbsContainer}>
				<span
					className={styles.goBack}
					type='button'
					title='Go back'
					onClick={_ => history.goBack()}>
					{'<'}
				</span>
				<p className={styles.breadcrumbs}>
					<Link to={`/shop/`}>Shop</Link>/
					<Link to={`/shop/${product.category}`}>{product.category}</Link>
				</p>
			</div>
			<SingleProductCard
				product={product}
				currentProductColorVariation={currentProductColorVariation}
				state={state}
				dispatch={dispatch}
				addToCart={addToCart}
			/>

			<h2 className={styles.h2}>Related products</h2>
			<ProductListing
				max={3}
				category={product.category}
				exclude={product.sku}
			/>
		</main>
	);
};

export default SingleProduct;
