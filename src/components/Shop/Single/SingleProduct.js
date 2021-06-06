import React, { useEffect, useReducer, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import lodash from 'lodash';

import styles from './SingleProduct.module.css';
import { cartActions } from '../../../store/cart/cartSlice';

import ProductListing from '../Listing/ProductListing';
import SingleProductCard from './SingleProductCard/SingleProductCard';

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
	const cartDispatch = useDispatch();

	//get corresponding product by passed id
	const { id } = useParams();
	const productsStore = useSelector(state => state.products);

	let productDetails = null;
	productDetails = useMemo(
		_ => {
			if (productsStore.products.length !== 0) {
				return lodash.cloneDeep(
					productsStore.products.filter(productItem => {
						return productItem.sku === id;
					})
				)[0];
			}
		},
		[productsStore.products, id]
	);

	//set local single product state
	const [state, dispatch] = useReducer(singleProductReducer, {
		sku: id,
		color: null,
		size: null,
		quantity: 1,
	});

	//Render another product if changed
	useEffect(() => {
		if (productDetails) {
			dispatch({ type: 'SET_PRODUCT', product: productDetails });
			window.scrollTo(0, 0);
		}
	}, [id, productDetails]);

	const addToCartHandler = _ => {
		cartDispatch(
			cartActions.addToCart({
				product: state,
				quantity: state.quantity,
			})
		);
	};

	let output = 'No product was found';

	if (productDetails) {
		output = (
			<>
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
						<Link to={`/shop/${productDetails.category}`}>
							{productDetails.category}
						</Link>
					</p>
				</div>
				<SingleProductCard
					product={productDetails}
					color={state.color}
					state={state}
					dispatch={dispatch}
					addToCart={addToCartHandler}
				/>
				<h2 className={styles.h2}>Related products</h2>
				<ProductListing
					max={3}
					category={productDetails.category}
					exclude={id}
				/>
			</>
		);
	}

	return <main> {output}</main>;
};

export default SingleProduct;
