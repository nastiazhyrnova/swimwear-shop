import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = (props, ref) => {
	return (
		<>
			<label htmlFor={props.name} className={styles.label}>
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
				ref={ref}
			/>
		</>
	);
};

export default forwardRef(Input);
