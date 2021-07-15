import styles from './SideBarCard.module.css';
import logo from '../../../../assets/logo-with-text-horizontal.svg';

const SideBarCard = props => {
	return (
		<>
			<div className={styles.card}>
				<h4>{props.title}</h4>
				<div className={styles.contentWrapper}>{props.children}</div>
			</div>
			<img src={logo} alt='Logo' className={styles.logo} />
		</>
	);
};

export default SideBarCard;
