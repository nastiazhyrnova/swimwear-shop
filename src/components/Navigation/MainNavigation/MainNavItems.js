import styles from './MainNavItems.module.css';

const MainNavItems = props => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li tabIndex='0'>Shop</li>
				<li tabIndex='0'>Create Yours</li>
				<li tabIndex='0'>About</li>
				<li tabIndex='0'>Contact</li>
			</ul>
		</nav>
	);
};

export default MainNavItems;
