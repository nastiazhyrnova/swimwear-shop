import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const Backdrop = props => {
	const backdrop = (
		<div className={styles.backdrop} onClick={props.close}></div>
	);

	return (
		<>
			{ReactDOM.createPortal(
				backdrop,
				document.getElementById('backdrop-root')
			)}
		</>
	);
};

Backdrop.propTypes = {
	close: PropTypes.func,
};

export default Backdrop;
