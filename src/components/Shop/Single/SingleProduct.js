import { useReducer } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import lodash from 'lodash';

import singleProductReducer from './singleProductReducer';
import useScrollToTop from '../../../hooks/use-scroll-to-top';
import formatPrice from '../../../utilities/formatPrice';
import styles from './SingleProduct.module.css';

import Button from '../../UI/Buttons/Button/Button';
import ColorsList from '../ColorsList/ColorsList';

import DUMMY_PRODUCTS from '../../../dummy_products/DUMMY_PRODUCTS';

const SingleProduct = _ => {
	useScrollToTop();

	const history = useHistory();
	const { id } = useParams();

	const product = lodash.cloneDeep(
		DUMMY_PRODUCTS.filter(product => product.sku === id)[0]
	);

	// TODO: add product itself or sku
	const initialState = {
		color: product.defaultColor,
		size: null,
		quantity: null,
	};

	const [state, dispatch] = useReducer(singleProductReducer, initialState);

	const currentProductColorVariation = product.options.colors.find(
		color => color.sku === state.color
	);

	return (
		<main>
			<div className={styles.breadcrumbsContainer}>
				<span className={styles.breadcrumbs}>Shop/{product.category}</span>
				{/* TODO: add link to the category */}
			</div>

			<div className={styles.detailsContainer}>
				<div className={styles.leftColumn}>
					<span
						className={styles.goBack}
						type='button'
						onClick={_ => history.goBack()}>
						{'<'}
					</span>
					<img
						className={styles.image}
						src={currentProductColorVariation.image}
						alt='Product'
					/>
				</div>
				<div className={styles.rightColumn}>
					<h3>{product.title}</h3>
					<span>
						Ref.: {product.sku}
						{state.color}
					</span>
					<h2 className={styles.price}>{formatPrice(product.price)}</h2>
					<h4>Colors</h4>
					<ColorsList
						selectedColor={state.color}
						changeSelectedColor={color =>
							dispatch({ type: 'SET_COLOR', color: color })
						}
					/>
					<h4>Sizes</h4>
					<ul>
						<li>XS</li>
						<li>S</li>
						<li>M</li>
						<li>L</li>
						<li>XL</li>
						<li>XXL</li>
					</ul>
					<p>{product.description}</p>
					<div className={styles.addToCartContainer}>
						<div className={styles.counterContainer}>
							<button>-</button>
							<span>1</span>
							<button>+</button>
						</div>
						<Button inversed additionalClass={styles.addToCartButton}>
							Add to cart
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default SingleProduct;
