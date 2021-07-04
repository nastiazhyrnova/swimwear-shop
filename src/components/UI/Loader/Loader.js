import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import styles from './Loader.module.css';

const Loader = _ => {
	const loading = useSelector(state => state.loading);

	const loader = (
		<div className={styles.background}>
			<div className={styles.skChase}>
				<div className={styles.skChaseDot}></div>
				<div className={styles.skChaseDot}></div>
				<div className={styles.skChaseDot}></div>
				<div className={styles.skChaseDot}></div>
				<div className={styles.skChaseDot}></div>
				<div className={styles.skChaseDot}></div>
			</div>
		</div>
	);
	return (
		<>
			{loading &&
				ReactDOM.createPortal(loader, document.getElementById('modal-root'))}
		</>
	);
};

export default Loader;
