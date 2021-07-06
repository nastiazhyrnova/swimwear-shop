import { forwardRef } from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	min: PropTypes.number,
	max: PropTypes.number,
	required: PropTypes.bool,
};

export default forwardRef(Input);
