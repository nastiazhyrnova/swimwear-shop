import React, { useEffect, useReducer, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import lodash, { add } from 'lodash';

import styles from './SingleProduct.module.css';
import { cartActions } from '../../../store/cartSlice';

import ProductListing from '../Listing/ProductListing';
import SingleProductCard from './SingleProductCard/SingleProductCard';

import DUMMY_PRODUCTS from '../../../dummy_products/DUMMY_PRODUCTS';

const singleProductReducer = (state, action) => {
	switch (action.type) {
		case 'SET_PRODUCT':
			return {
				sku: action.product.sku,
				color: action.product.defaultColor,
				size: null,
				quantity: 1,
			};
		case 'SET_COLOR':
			return { ...state, color: action.color };
		case 'SET_SIZE':
			return { ...state, size: action.size };
		case 'ADD_ITEM':
			return { ...state, quantity: state.quantity + 1 };
		case 'REMOVE_ITEM':
			return { ...state, quantity: state.quantity - 1 };
		default:
			throw new Error('smth went wrong with the singleProductReducer');
	}
};

const SingleProduct = _ => {
	const history = useHistory();

	//get product details according to the passed params
	const { id } = useParams();
	const product = useMemo(
		_ =>
			lodash.cloneDeep(DUMMY_PRODUCTS.filter(product => product.sku === id)[0]),
		[id]
	);

	//set local state of the chosen product
	const [state, dispatch] = useReducer(singleProductReducer, {
		sku: id,
		color: product.defaultColor,
		size: null,
		quantity: 1,
	});

	//load another product if changed
	useEffect(() => {
		dispatch({ type: 'SET_PRODUCT', product: product });
		window.scrollTo(0, 0);
	}, [id, product]);

	//TODO: can be improved:
	const currentProductColorVariation = product.options.colors.find(
		color => color.sku === state.color
	);

	//add to cart function through redux store
	const cartDispatch = useDispatch();
	const addToCartHandler = _ => {
		cartDispatch(
			cartActions.addToCart({ productDetails: state, quantity: state.quantity })
		);
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
				addToCart={addToCartHandler}
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
