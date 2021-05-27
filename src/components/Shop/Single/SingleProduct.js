import { useReducer, useRef, useCallback } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import lodash from 'lodash';

import singleProductReducer from './singleProductReducer';
import useScrollToTop from '../../../hooks/use-scroll-to-top';
import formatPrice from '../../../utilities/formatPrice';
import styles from './SingleProduct.module.css';

import Button from '../../UI/Buttons/Button/Button';
import ColorsList from '../ProductFeatures/ColorsList/ColorsList';
import SizesList from '../ProductFeatures/SizesList/SizesList';
import PriceTag from '../ProductFeatures/PriceTag/PriceTag';
import Label from '../ProductFeatures/Label/Label';
import ProductListing from '../Listing/ProductListing';

import DUMMY_PRODUCTS from '../../../dummy_products/DUMMY_PRODUCTS';

const SingleProduct = _ => {
	useScrollToTop();
	const history = useHistory();
	const { id } = useParams();
	const productQuantityRef = useRef(1);

	const product = lodash.cloneDeep(
		DUMMY_PRODUCTS.filter(product => product.sku === id)[0]
	);

	const [state, dispatch] = useReducer(singleProductReducer, {
		sku: product.sku,
		color: product.defaultColor,
		size: null,
		quantity: 1,
	});

	const currentProductColorVariation = product.options.colors.find(
		color => color.sku === state.color
	);

	const addToCart = _ => {
		console.log(state);
	};

	return (
		<main>
			<div className={styles.breadcrumbsContainer}>
				<span className={styles.breadcrumbs}>
					Shop/
					<Link to={`/shop/${product.category}`}>{product.category}</Link>
				</span>
				<span
					className={styles.goBack}
					type='button'
					onClick={_ => history.goBack()}>
					{'<'}
				</span>
			</div>

			<div className={styles.detailsContainer}>
				<div className={styles.leftColumn}>
					<div className={styles.imgContainer}>
						<Label product={product} />
						<img
							className={styles.image}
							src={currentProductColorVariation.image}
							alt={product.title}
						/>
					</div>
				</div>
				<div className={styles.rightColumn}>
					<h3>{product.title}</h3>
					<p>
						Ref.: {product.sku}
						{state.color}
					</p>
					<h2 className={styles.price}>
						<PriceTag product={product} />
					</h2>
					<h4>Colors</h4>
					<ColorsList
						selectedColor={state.color}
						changeSelectedColor={color =>
							dispatch({ type: 'SET_COLOR', color: color })
						}
					/>
					<h4>Sizes</h4>
					<SizesList
						selectedSize={state.size}
						changeSelectedSize={size =>
							dispatch({ type: 'SET_SIZE', size: size })
						}
					/>

					<p>{product.description}</p>
					<div className={styles.addToCartContainer}>
						<div className={styles.counterContainer}>
							<button
								onClick={_ => dispatch({ type: 'REMOVE_ITEM' })}
								disabled={state.quantity === 1 ? true : false}>
								-
							</button>
							<span>{state.quantity}</span>
							<button onClick={_ => dispatch({ type: 'ADD_ITEM' })}>+</button>
						</div>
						<Button
							inversed
							additionalClass={styles.addToCartButton}
							disabled={!state.size}
							onClick={addToCart}>
							Add to cart
						</Button>
					</div>
				</div>
			</div>
			<h2 className={styles.h2}>Related products</h2>
			<ProductListing max={3} category={product.category} />
		</main>
	);
};

export default SingleProduct;
