import PropTypes from 'prop-types';
import styles from './HiddenButton.module.css';

const HiddenButton = props => {
	return (
		<button
			className={styles.hiddenButton}
			aria-label={props.label}
			title={props.label}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
};
HiddenButton.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default HiddenButton;
