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
			htmlFor={props.size}
			onClick={_ => props.onClick(props.size)}>
			<input
				type='radio'
				id={props.size}
				name={props.size}
				value={props.size}
				className={styles.input}
				checked={props.checked}
			/>
			{props.size}
		</label>
	);
};

export default SizeItem;
