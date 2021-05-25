import { NavLink } from 'react-router-dom';

import styles from './MainNavItems.module.css';

const MainNavItems = props => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li tabIndex='0'>
					<NavLink
						to='/'
						exact
						activeClassName={styles.active}
						onClick={props.closeSidebar}>
						Home
					</NavLink>
				</li>
				<li tabIndex='0'>
					<NavLink
						to='/shop'
						activeClassName={styles.active}
						onClick={props.closeSidebar}>
						Shop
					</NavLink>
				</li>
				<li tabIndex='0'>
					<NavLink
						to='/create-yours'
						activeClassName={styles.active}
						onClick={props.closeSidebar}>
						Create Yours
					</NavLink>
				</li>
				<li tabIndex='0'>
					<NavLink
						to='/about'
						activeClassName={styles.active}
						onClick={props.closeSidebar}>
						About
					</NavLink>
				</li>
				<li tabIndex='0'>
					<NavLink
						to='/contact'
						activeClassName={styles.active}
						onClick={props.closeSidebar}>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default MainNavItems;
