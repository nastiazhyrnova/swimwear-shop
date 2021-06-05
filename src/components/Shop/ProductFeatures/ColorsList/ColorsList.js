import ColorItem from './ColorItem/ColorItem';

import styles from './ColorsList.module.css';
import ATTRIBUTES from '../../../../dummy_products/attributes';

const ColorsList = props => {
	const colors = ATTRIBUTES[0].options.map(color => {
		let checked = false;
		if (props.selectedColor === color.code) {
			checked = true;
		}

		return (
			<ColorItem
				color={color}
				key={color.code}
				checked={checked}
				onChange={defaultColor => props.changeSelectedColor(defaultColor)}
			/>
		);
	});

	return <div className={styles.colorAttributes}>{colors}</div>;
};

export default ColorsList;
