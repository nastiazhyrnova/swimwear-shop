import { NavLink } from 'react-router-dom';

import styles from './MainNavItems.module.css';

const MainNavItems = props => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li tabIndex='0'>
					<NavLink to='/' exact activeClassName={styles.active}>
						Home
					</NavLink>
				</li>
				<li tabIndex='0'>
					<NavLink to='/shop' activeClassName={styles.active}>
						Shop
					</NavLink>
				</li>
				<li tabIndex='0'>
					<NavLink to='/create-yours' activeClassName={styles.active}>
						Create Yours
					</NavLink>
				</li>
				<li tabIndex='0'>
					<NavLink to='/about' activeClassName={styles.active}>
						About
					</NavLink>
				</li>
				<li tabIndex='0'>
					<NavLink to='/contact' activeClassName={styles.active}>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNavItems;
