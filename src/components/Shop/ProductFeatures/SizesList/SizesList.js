import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import SizeItem from './SizeItem/SizeItem';

import styles from './SizesList.module.css';

const Sizes = props => {
	const productsStore = useSelector(state => state.products);

	const chooseSize = size => {
		props.changeSelectedSize(size);
	};

	let output = 'No sizes variations found';

	if (productsStore.attributes.size.length !== 0) {
		output = productsStore.attributes.size.map(size => {
			let checked = false;

			if (props.selectedSize === size) {
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

	return <div className={styles.sizesList}>{output}</div>;
};

Sizes.propTypes = {
	type: PropTypes.string.isRequired,
	changeSelectedSize: PropTypes.func.isRequired,
	selectedSize: PropTypes.string,
};

export default Sizes;
