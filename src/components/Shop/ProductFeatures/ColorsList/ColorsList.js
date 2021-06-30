import { useSelector } from 'react-redux';

import ColorItem from './ColorItem/ColorItem';

import PropTypes from 'prop-types';
import styles from './ColorsList.module.css';

const ColorsList = props => {
	const productsStore = useSelector(state => state.products);

	let output = 'No color options found';

	if (productsStore.attributes.color.length !== 0) {
		output = productsStore.attributes.color.map(color => {
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
					type={props.type}
					id={props.id}
				/>
			);
		});
	}

	return <div className={styles.colorAttributes}>{output}</div>;
};

ColorsList.propTypes = {
	type: PropTypes.string.isRequired,
	changeSelectedColor: PropTypes.func.isRequired,
	selectedColor: PropTypes.string,
	id: PropTypes.string.isRequired,
};

export default ColorsList;
