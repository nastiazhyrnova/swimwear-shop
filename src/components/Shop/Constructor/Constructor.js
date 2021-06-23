import { useMemo } from 'react';
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

	const showPrevious = (category, currentSku) => {
		console.log('Prev');
	}; //TODO
	const showNext = (category, currentSku) => {
		console.log('Next');
	}; //TODO

	if (productsStore.products.length > 0) {
		const productTop = topProducts[0];
		const productBottom = bottomProducts[0];
		output = (
			<>
				<div>
					<ConstructorItem
						product={productTop}
						showPrevious={showPrevious}
						showNext={showNext}
					/>
				</div>
				<div className={styles.productContainer}>
					<ConstructorItem
						product={productBottom}
						showPrevious={showPrevious}
						showNext={showNext}
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
