import { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ConstructorItem from './ConstructorItem/ConstructorItem';
import Button from '../../UI/Buttons/Button/Button';
import TotalPrice from './TotalPrice/TotalPrice';

import { cartActions } from '../../../store/cart/cartSlice';
import { sidebarActions } from '../../../store/sidebar/sidebarSlice';
import styles from './Constructor.module.css';

const Constructor = _ => {
	const productsStore = useSelector(state => state.products);
	const dispatch = useDispatch();

	const [currentTopProductIndex, setCurrentTopProductIndex] = useState(0);
	const [currentBottomProductIndex, setCurrentBottomProductIndex] = useState(0);

	const [currentTopProduct, setCurrentTopProduct] = useState({
		color: null,
		size: null,
	});
	const [currentBottomProduct, setCurrentBottomProduct] = useState({
		color: null,
		size: null,
	});

	let orderValid = false;
	if (!!currentBottomProduct.size && !!currentTopProduct.size) {
		orderValid = true;
	} else {
		orderValid = false;
	}

	//setting products arrays & single products
	let output = 'No products found';
	let topProducts = useMemo(_ => [], []);
	let bottomProducts = useMemo(_ => [], []);
	let topProduct;
	let bottomProduct;

	topProducts = useMemo(
		_ => {
			if (productsStore.products.length > 0) {
				return productsStore.products.filter(
					product => product.category === 'tops'
				);
			}
		},
		[productsStore.products]
	);

	bottomProducts = useMemo(
		_ => {
			if (productsStore.products.length > 0) {
				return productsStore.products.filter(
					product => product.category === 'bottoms'
				);
			}
		},
		[productsStore.products]
	);

	topProduct = useMemo(
		_ => {
			if (productsStore.products.length > 0) {
				return topProducts[currentTopProductIndex];
			}
		},
		[productsStore.products, topProducts, currentTopProductIndex]
	);

	bottomProduct = useMemo(
		_ => {
			if (productsStore.products.length > 0) {
				return bottomProducts[currentBottomProductIndex];
			}
		},
		[productsStore.products, bottomProducts, currentBottomProductIndex]
	);

	//setting detaulf colors on the first render of the first product
	if (
		productsStore.products.length > 0 &&
		currentTopProductIndex === 0 &&
		!currentTopProduct.color
	) {
		setCurrentTopProduct(prevState => ({
			...prevState,
			color: topProduct.defaultColor,
		}));
	}
	if (
		productsStore.products.length > 0 &&
		currentBottomProductIndex === 0 &&
		!currentBottomProduct.color
	) {
		setCurrentBottomProduct(prevState => ({
			...prevState,
			color: bottomProduct.defaultColor,
		}));
	}

	const getColor = (category, color) => {
		if (category === 'tops') {
			setCurrentTopProduct(prevState => ({ ...prevState, color: color }));
		} else if (category === 'bottoms') {
			setCurrentBottomProduct(prevState => ({ ...prevState, color: color }));
		}
	};

	const getSize = (category, size) => {
		if (category === 'tops') {
			setCurrentTopProduct(prevState => ({ ...prevState, size: size }));
		} else if (category === 'bottoms') {
			setCurrentBottomProduct(prevState => ({ ...prevState, size: size }));
		}
	};

	const showPrevious = category => {
		if (category === 'tops') {
			if (currentTopProductIndex === 0) {
				setCurrentTopProductIndex(topProducts.length - 1);
			} else {
				setCurrentTopProductIndex(currentTopProductIndex - 1);
			}
		} else if (category === 'bottoms') {
			if (currentBottomProductIndex === 0) {
				setCurrentBottomProductIndex(bottomProducts.length - 1);
			} else {
				setCurrentBottomProductIndex(currentBottomProductIndex - 1);
			}
		}
	};

	const showNext = category => {
		if (category === 'tops') {
			if (currentTopProductIndex === topProducts.length - 1) {
				setCurrentTopProductIndex(0);
			} else {
				setCurrentTopProductIndex(currentTopProductIndex + 1);
			}
		} else if (category === 'bottoms') {
			if (currentBottomProductIndex === bottomProducts.length - 1) {
				setCurrentBottomProductIndex(0);
			} else {
				setCurrentBottomProductIndex(currentBottomProductIndex + 1);
			}
		}
	};

	const addToCart = _ => {
		dispatch(
			cartActions.addToCart({
				product: {
					sku: topProduct.sku,
					color: currentTopProduct.color,
					size: currentTopProduct.size,
					quantity: 1,
				},
			})
		);
		dispatch(
			cartActions.addToCart({
				product: {
					sku: bottomProduct.sku,
					color: currentBottomProduct.color,
					size: currentBottomProduct.size,
					quantity: 1,
				},
			})
		);
		dispatch(sidebarActions.openSidebar({ sidebar: 'cart' }));
	};

	if (productsStore.products.length > 0) {
		output = (
			<>
				<div className={styles.productContainer}>
					<ConstructorItem
						key='tops'
						id='tops'
						product={topProduct}
						showPrevious={showPrevious}
						showNext={showNext}
						currentIndex={currentTopProductIndex}
						passColor={(category, color) => getColor(category, color)}
						passSize={(category, size) => getSize(category, size)}
					/>
				</div>
				<div className={styles.productContainer}>
					<ConstructorItem
						key='bottoms'
						id='bottoms'
						product={bottomProduct}
						showPrevious={showPrevious}
						showNext={showNext}
						currentIndex={currentBottomProductIndex}
						passColor={(category, color) => getColor(category, color)}
						passSize={(category, size) => getSize(category, size)}
					/>
				</div>
			</>
		);
	}

	return (
		<main>
			<div>
				<ol className={styles.steps}>
					<li>Choose color</li>
					<li>Choose model</li>
					<li>Choose size</li>
				</ol>
			</div>
			{output}
			<div className={styles.total}>
				{productsStore.products.length > 0 ? (
					<TotalPrice topProduct={topProduct} bottomProduct={bottomProduct} />
				) : null}
				<Button
					inversed
					disabled={!orderValid}
					disabledMessage='Please choose size & color for both items'
					additionalClass={styles.addToCartButton}
					onClick={addToCart}>
					Add to cart
				</Button>
			</div>
		</main>
	);
};

export default Constructor;
