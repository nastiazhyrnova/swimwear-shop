import ReactDOM from 'react-dom';
import styles from './Loader.module.css';

const Loader = () => {
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
			{ReactDOM.createPortal(loader, document.getElementById('backdrop-root'))}
		</>
	);
};

export default Loader;
