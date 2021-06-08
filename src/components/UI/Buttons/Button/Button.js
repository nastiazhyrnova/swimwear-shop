import styles from './Button.module.css';

const Button = props => {
	//receives props: onClick and additionalClass in case is necessary, inversed

	let mergedStyles = `${props.additionalClass} ${styles.button}`;

	if (props.inversed) {
		mergedStyles = `${props.additionalClass} ${styles.inversed}`;
	}

	return (
		<button
			className={mergedStyles}
			onClick={props.onClick}
			title={props.children}
			disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
