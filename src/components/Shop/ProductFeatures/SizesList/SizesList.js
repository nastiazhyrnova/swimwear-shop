import styles from './SizesList.module.css';

import SizeItem from './SizeItem/SizeItem';

import ATTRIBUTES from '../../../../dummy_products/attributes';

const Sizes = props => {
	const chooseSize = size => {
		props.changeSelectedSize(size);
	};

	const sizes = ATTRIBUTES[1].options.map(size => {
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
			/>
		);
	});

	return <div className={styles.sizesList}>{sizes}</div>;
};

export default Sizes;
