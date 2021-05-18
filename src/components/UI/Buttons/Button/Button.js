import styles from './Button.module.css';

const Button = props => {
	//receives props: onClick and additionalClass in case is necessary

	const mergedStyles = `${props.additionalClass} ${styles.button}`;

	return (
		<button className={mergedStyles} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
