import styles from './ColorItem.module.css';
import checkIcon from '../../../../../assets/icons/check.svg';

const ColorItem = props => {
	const overlayStyles = [styles.overlay];

	if (props.checked) {
		overlayStyles.push(styles.checked);
	}

	return (
		<label
			className={styles.colorSwatch}
			title={props.color.value}
			htmlFor={props.color.sku}>
			<input
				type='radio'
				id={props.color.sku}
				name={props.color.value}
				value={props.color.value}
				className={styles.input}
				checked={props.checked}
				onChange={_ => props.onChange(props.color.sku)}
			/>
			<img
				src={props.color.swatchURL}
				alt={props.color.value}
				className={styles.colorSwatchImg}
			/>
			<div className={overlayStyles.join(' ')}>
				<span>
					<img className={styles.checkIcon} src={checkIcon} alt='Check' />
				</span>
			</div>
		</label>
	);
};

export default ColorItem;
