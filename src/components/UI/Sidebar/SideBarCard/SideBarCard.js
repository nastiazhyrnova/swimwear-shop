import styles from './SideBarCard.module.css';
import logo from '../../../../assets/logo-with-text-horizontal.svg';

const SideBarCard = props => {
	return (
		<div className={styles.card}>
			<h4>{props.title}</h4>
			{props.children}
			<img src={logo} alt='Logo' />
		</div>
	);
};

export default SideBarCard;
