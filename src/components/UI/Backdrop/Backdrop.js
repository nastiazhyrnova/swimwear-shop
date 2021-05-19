import ReactDOM from 'react-dom';

import styles from './Backdrop.module.css';

const Backdrop = props => {
	const backdrop = (
		<div className={styles.backdrop} onClick={props.onClick}></div>
	);

	return (
		<>
			{ReactDOM.createPortal(backdrop, document.getElementById('modal-root'))}
		</>
	);
};

export default Backdrop;
