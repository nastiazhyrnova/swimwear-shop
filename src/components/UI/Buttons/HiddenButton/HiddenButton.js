import styles from './HiddenButton.module.css';

const HiddenButton = props => {
	return (
		<button
			className={styles.hiddenButton}
			aria-label={props.label}
			title={props.label}>
			{props.children}
		</button>
	);
};

export default HiddenButton;
