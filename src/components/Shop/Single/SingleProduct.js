import React, { useEffect, useReducer, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import lodash from 'lodash';
import { cartActions } from '../../../store/cart/cartSlice';
import { sidebarActions } from '../../../store/sidebar/sidebarSlice';
import getRandomArrayItem from '../../../utilities/getRandomArrayItem';

import ProductListing from '../Listing/ProductListing';
import SingleProductCard from './SingleProductCard/SingleProductCard';

import styles from './SingleProduct.module.css';

const singleProductReducer = (state, action) => {
	switch (action.type) {
		case 'SET_PRODUCT':
			return {
				sku: action.product.sku,
				color: action.randomColor,
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
	const storeDispatch = useDispatch();

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
		if (productDetails && productsStore.attributes.color.length !== 0) {
			const randomColor = getRandomArrayItem(
				productsStore.attributes.color
			).code;
			dispatch({
				type: 'SET_PRODUCT',
				product: productDetails,
				randomColor: randomColor,
			});
			window.scrollTo(0, 0);
		}
	}, [id, productDetails, productsStore.attributes.color]);

	const addToCartHandler = _ => {
		storeDispatch(
			cartActions.addToCart({
				product: state,
				quantity: state.quantity,
			})
		);
		storeDispatch(sidebarActions.openSidebar({ sidebar: 'cart' }));
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
					state={state}
					dispatchLocalState={dispatch}
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
