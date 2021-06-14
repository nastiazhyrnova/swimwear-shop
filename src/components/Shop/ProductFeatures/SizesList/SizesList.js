import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import SizeItem from './SizeItem/SizeItem';

import styles from './SizesList.module.css';

const Sizes = props => {
	const productsStore = useSelector(state => state.products);
	let output = 'No sizes variations found';

	const chooseSize = size => {
		props.changeSelectedSize(size);
	};

	if (productsStore.attributes.size.length !== 0) {
		output = productsStore.attributes.size.map(size => {
			let checked = false;

			if (props.selectedSize === size) {
				checked = true;
			} else if (props.selectedSize.includes(size)) {
				checked = true;
			}

			return (
				<SizeItem
					size={size}
					key={size}
					checked={checked}
					onChange={size => chooseSize(size)}
					type={props.type}
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
};

export default Sizes;
