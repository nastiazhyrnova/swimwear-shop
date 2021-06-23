import { useSelector } from 'react-redux';

import ConstructorItem from './ConstructorItem/ConstructorItem';

import styles from './Constructor.module.css';

const Constructor = _ => {
	const productsStore = useSelector(state => state.products);
	let output = 'No products found';

	if (productsStore.products.length > 0) {
		const productTop = productsStore.products[10];
		const productBottom = productsStore.products[0];
		output = (
			<>
				<div>
					<ConstructorItem product={productTop} />
				</div>
				<div className={styles.productContainer}>
					<ConstructorItem product={productBottom} />
				</div>
			</>
		);
	}

	const showPrevious = (category, currentSku) => {};
	const showNext = (category, currentSku) => {};

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
