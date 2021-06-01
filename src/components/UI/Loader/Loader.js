import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import styles from './Loader.module.css';

const Loader = () => {
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
				ReactDOM.createPortal(loader, document.getElementById('backdrop-root'))}
		</>
	);
};

export default Loader;
