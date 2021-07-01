import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SizesList from '../../ProductFeatures/SizesList/SizesList';
import ColorsList from '../../ProductFeatures/ColorsList/ColorsList';
import HiddenButton from '../../../UI/Buttons/HiddenButton/HiddenButton';
import Label from '../../ProductFeatures/Label/Label';

import styles from './ConstructorItem.module.css';
import productImages from '../../../../assets/products/productImages';
import arrowIcon from '../../../../assets/icons/arrow.svg';

const ConstructorItem = props => {
	const [color, setColor] = useState(props.product.defaultColor);
	const [size, setSize] = useState(null);

	const selectSize = size => {
		setSize(size);
		props.passSize(props.id, size);
	};
	const selectColor = color => {
		setColor(color);
		props.passColor(props.id, color);
	};

	const image =
		productImages[`${props.product.category}`][`${props.product.sku}`][
			`${color ? color : props.product.defaultColor}`
		];

	return (
		<div>
			<div className={styles.productContainer}>
				<div className={styles.colors}>
					<ColorsList
						type='radio'
						changeSelectedColor={selectColor}
						selectedColor={color}
						id={props.id}
					/>
				</div>
				<div className={styles.slider}>
					<HiddenButton
						label='Previous'
						onClick={_ =>
							props.showPrevious(props.product.category, props.product.sku)
						}>
						<img src={arrowIcon} alt='Previous' className={styles.leftArrow} />
					</HiddenButton>{' '}
					<div className={styles.imageWrapper}>
						<img
							src={image}
							alt={props.product.title}
							className={styles.image}
						/>
					</div>
					<HiddenButton
						label='Next'
						onClick={_ =>
							props.showNext(props.product.category, props.product.sku)
						}>
						<img src={arrowIcon} alt='Next' className={styles.rightArrow} />
					</HiddenButton>
				</div>
				<div className={styles.sizes}>
					<SizesList
						column
						type='radio'
						selectedSize={size}
						changeSelectedSize={selectSize}
						id={props.id}
					/>
				</div>
			</div>
		</div>
	);
};

ConstructorItem.propTypes = {
	product: PropTypes.object.isRequired,
	showPrevious: PropTypes.func,
	showNext: PropTypes.func,
	currentIndex: PropTypes.number,
	passColor: PropTypes.func,
};

export default ConstructorItem;
