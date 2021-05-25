import { useState } from 'react';

import ColorItem from './ColorItem/ColorItem';

import styles from './ColorsList.module.css';
import ATTRIBUTES from '../../../dummy_products/attributes';

const ColorsList = props => {
	const colors = ATTRIBUTES[0].options.map(color => {
		let checked = false;
		if (props.selectedColor === color.sku) {
			checked = true;
		}

		return (
			<ColorItem
				color={color}
				key={color.sku}
				checked={checked}
				onClick={defaultColor => props.changeSelectedColor(defaultColor)}
			/>
		);
	});

	return <div className={styles.colorAttributes}>{colors}</div>;
};

export default ColorsList;
