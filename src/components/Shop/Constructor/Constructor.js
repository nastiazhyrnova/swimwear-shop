import { useState } from 'react';
import { useSelector } from 'react-redux';

import ConstructorItem from './ConstructorItem/ConstructorItem';

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

	const [currentTopProduct, setCurrentTopProduct] = useState(0);
	const [currentBottomProduct, setCurrentBottomProduct] = useState(0);

	const showPrevious = category => {
		if (category === 'tops') {
			if (currentTopProduct === 0) {
				setCurrentTopProduct(topProducts.length - 1);
			} else {
				setCurrentTopProduct(currentTopProduct - 1);
			}
		} else if (category === 'bottoms') {
			if (currentBottomProduct === 0) {
				setCurrentBottomProduct(bottomProducts.length - 1);
			} else {
				setCurrentBottomProduct(currentBottomProduct - 1);
			}
		}
	}; //TODO
	const showNext = category => {
		if (category === 'tops') {
			if (currentTopProduct === topProducts.length - 1) {
				setCurrentTopProduct(0);
			} else {
				setCurrentTopProduct(currentTopProduct + 1);
			}
		} else if (category === 'bottoms') {
			if (currentBottomProduct === bottomProducts.length - 1) {
				setCurrentBottomProduct(0);
			} else {
				setCurrentBottomProduct(currentBottomProduct + 1);
			}
		}
	}; //TODO

	if (productsStore.products.length > 0) {
		const productTop = topProducts[currentTopProduct];
		const productBottom = bottomProducts[currentBottomProduct];
		output = (
			<>
				<div>
					<ConstructorItem
						product={productTop}
						showPrevious={showPrevious}
						showNext={showNext}
						currentIndex={currentTopProduct}
					/>
				</div>
				<div className={styles.productContainer}>
					<ConstructorItem
						product={productBottom}
						showPrevious={showPrevious}
						showNext={showNext}
						currentIndex={currentBottomProduct}
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
		</main>
	);
};

export default Constructor;
