import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/Backdrop';

import styles from './Sidebar.module.css';

//props - 'left' (default), or 'right'- boolean
const Sidebar = props => {
	const sidebar = (
		<div className={props.right ? styles.sidebarRight : styles.sidebarLeft}>
			<span
				className={
					props.right ? `${styles.cross} ${styles.crossRight}` : styles.cross
				}
				title='Close'
				onClick={props.close}></span>
			{props.children}
		</div>
	);

	return (
		<aside>
			{ReactDOM.createPortal(sidebar, document.getElementById('sidebar-root'))}
			<Backdrop close={props.close} />
		</aside>
	);
};

Sidebar.propTypes = {
	left: PropTypes.bool,
	right: PropTypes.bool,
	close: PropTypes.func.isRequired,
};

export default Sidebar;
