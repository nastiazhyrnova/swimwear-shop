import styles from './BurgerButton.module.css';

const BurgerButton = props => {
	return (
		<div className={styles.burgerButton} type='button' onClick={props.onClick}>
			<div className={styles.lineOne}></div>
			<div className={styles.lineTwo}></div>
			<div className={styles.lineThree}></div>
		</div>
	);
};

export default BurgerButton;
