import ReactDOM from 'react-dom';

import styles from './Sidebar.module.css';

//props - 'left' by default, or 'right'- boolean
const Sidebar = props => {
	const sidebar = (
		<div className={props.right ? styles.sidebarRight : styles.sidebarLeft}>
			{props.children}
		</div>
	);

	return (
		<>
			{ReactDOM.createPortal(sidebar, document.getElementById('sidebar-root'))}
		</>
	);
};

export default Sidebar;
