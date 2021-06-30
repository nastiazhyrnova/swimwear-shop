import { useState } from 'react';
import { useSelector } from 'react-redux';

import ConstructorItem from './ConstructorItem/ConstructorItem';
import Button from '../../UI/Buttons/Button/Button';

import styles from './Constructor.module.css';

const Constructor = _ => {
	const productsStore = useSelector(state => state.products);
	let output = 'No products found';
	let topProducts = [];
	let bottomProducts = [];

	if (productsStore.products.length > 0) {
		topProducts = productsStore.products.filter(
			product => product.category === 'tops'
		);
		bottomProducts = productsStore.products.filter(
			product => product.category === 'bottoms'
		);
	}

	const [currentTopProductIndex, setcurrentTopProductIndex] = useState(0);
	const [currentBottomProductIndex, setcurrentBottomProductIndex] = useState(0);

	const [chosenTopProduct, setChosenTopProduct] = useState({
		sku: null,
		color: null,
		size: null,
		quantity: 1,
	});
	const [chosenBottomProduct, setChosenBottomProduct] = useState({
		sku: null,
		color: null,
		size: null,
		quantity: 1,
	});

	const getColor = (category, color) => {
		if (category === 'tops') {
			setChosenTopProduct(prevState => ({ ...prevState, color: color }));
		} else if (category === 'bottoms') {
			setChosenBottomProduct(prevState => ({ ...prevState, color: color }));
		}
	};

	const showPrevious = category => {
		if (category === 'tops') {
			if (currentTopProductIndex === 0) {
				setcurrentTopProductIndex(topProducts.length - 1);
			} else {
				setcurrentTopProductIndex(currentTopProductIndex - 1);
			}
		} else if (category === 'bottoms') {
			if (currentBottomProductIndex === 0) {
				setcurrentBottomProductIndex(bottomProducts.length - 1);
			} else {
				setcurrentBottomProductIndex(currentBottomProductIndex - 1);
			}
		}
	};

	const showNext = category => {
		if (category === 'tops') {
			if (currentTopProductIndex === topProducts.length - 1) {
				setcurrentTopProductIndex(0);
			} else {
				setcurrentTopProductIndex(currentTopProductIndex + 1);
			}
		} else if (category === 'bottoms') {
			if (currentBottomProductIndex === bottomProducts.length - 1) {
				setcurrentBottomProductIndex(0);
			} else {
				setcurrentBottomProductIndex(currentBottomProductIndex + 1);
			}
		}
	};

	if (productsStore.products.length > 0) {
		const productTop = topProducts[currentTopProductIndex];
		const productBottom = bottomProducts[currentBottomProductIndex];

		output = (
			<>
				<div className={styles.productContainer}>
					<ConstructorItem
						key='tops'
						id='tops'
						product={productTop}
						showPrevious={showPrevious}
						showNext={showNext}
						currentIndex={currentTopProductIndex}
						passColor={(category, color) => getColor(category, color)}
					/>
				</div>
				<div className={styles.productContainer}>
					<ConstructorItem
						key='bottoms'
						id='bottoms'
						product={productBottom}
						showPrevious={showPrevious}
						showNext={showNext}
						currentIndex={currentBottomProductIndex}
						passColor={(category, color) => getColor(category, color)}
					/>
				</div>
			</>
		);
	}

	console.log(chosenTopProduct);
	console.log(chosenBottomProduct);

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
				<h2>
					Total: <strong>25.00</strong>
				</h2>
				<Button
					inversed
					additionalClass={styles.addToCartButton}
					onClick={_ => {}}>
					Add to cart
				</Button>
			</div>
		</main>
	);
};

export default Constructor;
