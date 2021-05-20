import styles from './Input.module.css';

const Input = props => {
	return (
		<>
			<label for={props.name} className={styles.label}>
				{props.title}
			</label>
			<input
				className={styles.input}
				name={props.name}
				placeholder={props.title}
				type={props.type}
				minLength={props.min}
				maxLength={props.max}
				required={props.required}
			/>
		</>
	);
};

export default Input;
