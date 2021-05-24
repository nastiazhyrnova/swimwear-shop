import { useState } from 'react';

import ColorItem from './ColorItem/ColorItem';

import styles from './ColorsList.module.css';
import ATTRIBUTES from '../../../dummy_products/attributes';

const ColorsList = props => {
	const [activeColor, setActiveColor] = useState(props.activeColor);

	const colors = ATTRIBUTES[0].options.map(color => (
		<ColorItem color={color} />
	));

	return <form className={styles.colorAttributes}>{colors}</form>;
};

export default ColorsList;
