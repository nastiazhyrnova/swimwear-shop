import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

import styles from './Notification.module.css';

const Notification = () => {
	const notificationStore = useSelector(state => state.notification);

	const notification = (
		<div className={styles.notificationContainer}>
			{notificationStore.message}
		</div>
	);

	return (
		<>
			{ReactDOM.createPortal(
				notification,
				document.getElementById('notification-root')
			)}
		</>
	);
};

export default Notification;
