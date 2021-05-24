import styles from './ColorsList.module.css';
import ATTRIBUTES from '../../../dummy_products/attributes';
import checkIcon from '../../../assets/icons/check.svg';

const ColorsList = _ => {
	console.log(ATTRIBUTES);

	const colors = ATTRIBUTES[0].options.map(color => (
		<li className={styles.li} key={color.sku} title={color.value}>
			<img
				src={color.swatchURL}
				alt={color.value}
				className={styles.colorSwatchImg}
			/>

			<div className={styles.overlay}>
				<span>
					<img className={styles.checkIcon} src={checkIcon} alt='Check' />
				</span>
			</div>
		</li>
	));
	return <ul>{colors}</ul>;
};

export default ColorsList;
