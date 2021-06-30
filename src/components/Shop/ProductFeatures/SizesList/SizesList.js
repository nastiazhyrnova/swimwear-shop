import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import SizeItem from './SizeItem/SizeItem';

import styles from './SizesList.module.css';

const Sizes = props => {
	const productsStore = useSelector(state => state.products);
	let output = 'No sizes variations found';

	const selectSize = size => {
		props.changeSelectedSize(size);
	};

	//check if the item is checked
	if (productsStore.attributes.size.length !== 0) {
		output = productsStore.attributes.size.map(size => {
			let checked = false;

			//if props.selectedSize is a radio button (e.g. selected Size is a string)
			if (props.selectedSize && typeof props.selectedSize === 'string') {
				if (props.selectedSize === size) {
					checked = true;
				}
			}
			//if props.selectedSize is a checkbox (e.g. selected Size is an array)
			else if (
				props.selectedSize &&
				Array.isArray(props.selectedSize) &&
				!!props.selectedSize.find(existingSize => existingSize === size)
			) {
				checked = true;
			}

			return (
				<SizeItem
					size={size}
					key={`${size}${props.id}`}
					checked={checked}
					onChange={size => {
						selectSize(size);
					}}
					type={props.type}
					id={props.id}
				/>
			);
		});
	}

	const sizeListStyles = [styles.sizesList];
	if (props.column) {
		sizeListStyles.push(styles.column);
	}

	return <div className={sizeListStyles.join(' ')}>{output}</div>;
};

Sizes.propTypes = {
	type: PropTypes.string.isRequired,
	changeSelectedSize: PropTypes.func.isRequired,
	column: PropTypes.bool,
	id: PropTypes.string,
	// selectedSize:
};

export default Sizes;
