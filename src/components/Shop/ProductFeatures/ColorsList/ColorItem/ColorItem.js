import styles from './ColorItem.module.css';
import checkIcon from '../../../../../assets/icons/check.svg';

import colorSwatches from '../../../../../assets/products/color-swatches/color-swatches';

const ColorItem = props => {
	//get current colorSwatch image
	const swatchImage = colorSwatches[`${props.color.code}`];

	//marked as checked
	const overlayStyles = [styles.overlay];
	if (props.checked) {
		overlayStyles.push(styles.checked);
	}

	return (
		<label
			className={styles.colorSwatch}
			title={props.color.title}
			htmlFor={props.color.code}>
			<input
				type='radio'
				id={props.color.code}
				name={props.color.title}
				value={props.color.title}
				className={styles.input}
				checked={props.checked}
				onChange={_ => props.onChange(props.color.code)}
			/>
			<img
				src={swatchImage}
				alt={props.color.title}
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
