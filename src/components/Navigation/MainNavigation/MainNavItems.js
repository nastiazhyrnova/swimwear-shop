import styles from './MainNavItems.module.css';

const MainNavItems = props => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>Shop</li>
				<li>Create Yours</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default MainNavItems;
