import ReactDOM from 'react-dom';

import Backdrop from '../Backdrop/Backdrop';

import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = props => {
	const modal = (
		<>
			<Backdrop close={props.close} />
			<aside>
				<div className={styles.modalContainer}>
					<span
						className={styles.cross}
						onClick={props.close}
						title='Close'></span>
					{props.children}
				</div>
			</aside>
		</>
	);
	return (
		<>{ReactDOM.createPortal(modal, document.getElementById('modal-root'))}</>
	);
};

Modal.propTypes = {
	close: PropTypes.func,
};

export default Modal;
