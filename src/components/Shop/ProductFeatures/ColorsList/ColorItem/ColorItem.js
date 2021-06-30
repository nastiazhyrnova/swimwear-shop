import styles from './ColorItem.module.css';
import checkIcon from '../../../../../assets/icons/check.svg';

import PropTypes from 'prop-types';
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
			htmlFor={`${props.color.code}${props.id}`}>
			<input
				type={props.type}
				id={`${props.color.code}${props.id}`}
				name={props.id}
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

ColorItem.propTypes = {
	onChange: PropTypes.func.isRequired,
	color: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	id: PropTypes.string.isRequired,
};

export default ColorItem;
