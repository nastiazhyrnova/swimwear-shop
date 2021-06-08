import ReactDOM from 'react-dom';

import Backdrop from '../Backdrop/Backdrop';

import styles from './Sidebar.module.css';

//props - 'left' (default), or 'right'- boolean
const Sidebar = props => {
	const sidebar = (
		<aside>
			<div className={props.right ? styles.sidebarRight : styles.sidebarLeft}>
				<span
					className={
						props.right ? `${styles.cross} ${styles.crossRight}` : styles.cross
					}
					title='Close'
					onClick={props.closeFunc}></span>
				{props.children}
			</div>
			<Backdrop onClick={props.closeFunc} />
		</aside>
	);

	return (
		<>
			{ReactDOM.createPortal(sidebar, document.getElementById('sidebar-root'))}
		</>
	);
};

export default Sidebar;
