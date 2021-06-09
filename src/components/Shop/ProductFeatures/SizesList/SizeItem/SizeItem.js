import PropTypes from 'prop-types';
import styles from './SizeItem.module.css';

const SizeItem = props => {
	const sizeItemStyles = [styles.sizeItem];

	if (props.checked) {
		sizeItemStyles.push(styles.checked);
	}

	return (
		<label
			className={sizeItemStyles.join(' ')}
			title={props.size}
			htmlFor={props.size}>
			<input
				type={props.type}
				id={props.size}
				name={props.size}
				value={props.size}
				className={styles.input}
				checked={props.checked}
				onChange={_ => props.onChange(props.size)}
			/>
			{props.size}
		</label>
	);
};

SizeItem.propTypes = {
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	size: PropTypes.string.isRequired,
};

export default SizeItem;
