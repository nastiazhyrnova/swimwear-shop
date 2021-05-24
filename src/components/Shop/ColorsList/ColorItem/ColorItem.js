import { useRef } from 'react';

import styles from './ColorItem.module.css';
import checkIcon from '../../../../assets/icons/check.svg';

const ColorItem = props => {
	const checkedColor = useRef();
	console.log(checkedColor.current);

	return (
		<label
			className={styles.colorSwatch}
			key={props.color.sku}
			title={props.color.value}
			for={props.color.sku}
			ref={checkedColor}>
			<input
				type='radio'
				id={props.color.sku}
				name={props.color.value}
				value={props.color.value}
				className={styles.input}
			/>
			<img
				src={props.color.swatchURL}
				alt={props.color.value}
				className={styles.colorSwatchImg}
			/>
			<div className={styles.overlay}>
				<span>
					<img className={styles.checkIcon} src={checkIcon} alt='Check' />
				</span>
			</div>
		</label>
	);
};

export default ColorItem;
