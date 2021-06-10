import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = props => {
	//receives props: onClick and additionalClass in case is necessary, inversed

	let mergedStyles = `${props.additionalClass} ${styles.button}`;

	if (props.grey) {
		mergedStyles = `${props.additionalClass} ${styles.grey}`;
	} else if (props.inversed) {
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

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	additionalClass: PropTypes.string,
	disabled: PropTypes.bool,
	inversed: PropTypes.bool,
	grey: PropTypes.bool,
};

export default Button;
