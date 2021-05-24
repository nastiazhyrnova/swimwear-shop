import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import lodash from 'lodash';

import useScrollToTop from '../../../hooks/use-scroll-to-top';
import styles from './SingleProduct.module.css';

import Button from '../../UI/Buttons/Button/Button';
import ColorsList from '../ColorsList/ColorsList';

import BANDEAU from '../../../dummy_products/top-bandeau';

const SingleProduct = _ => {
	useScrollToTop();

	const history = useHistory();
	const { id } = useParams();

	const product = lodash.cloneDeep(
		BANDEAU.filter(product => product.sku === id)[0]
	);

	const [selectedColor, setSelectedColor] = useState(product.colorSku);

	const changeSelectedColor = color => setSelectedColor(color);

	const price = new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0,
	}).format(product.price);

	const goBack = _ => {
		history.goBack();
	};

	const productColorVariation = product.options.colors.find(
		color => color.sku === selectedColor
	);

	return (
		<main>
			<div className={styles.topSectionContainer}>
				<span>Shop/Tops</span>
			</div>

			<div className={styles.detailsContainer}>
				<div className={styles.leftColumn}>
					<span className={styles.goBack} type='button' onClick={goBack}>
						{'<'}
					</span>
					<img
						className={styles.image}
						src={productColorVariation.image}
						alt='Product'
					/>
				</div>
				<div className={styles.rightColumn}>
					<h3>{product.title}</h3>
					<span>Ref.: {product.sku}</span>
					<h2 className={styles.price}>{price}</h2>
					<h4>Colors</h4>
					<ColorsList
						selectedColor={selectedColor}
						changeSelectedColor={changeSelectedColor}
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
					<Button inversed additionalClass={styles.addToCart}>
						Add to cart
					</Button>
				</div>
			</div>
		</main>
	);
};

export default SingleProduct;
