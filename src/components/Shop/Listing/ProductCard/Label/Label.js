import styles from './Label.module.css';

const Label = props => {
	return (
		<>
			{props.product.bestseller && (
				<span className={styles.label}>BESTSELLER</span>
			)}
		</>
	);
};

export default Label;
