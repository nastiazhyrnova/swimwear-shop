import { NavLink } from 'react-router-dom';

import styles from './FooterNav.module.css';
import logo from '../../../assets/logo-without-text.svg';

const FooterNav = _ => {
	return (
		<nav className={styles.footerNav}>
			<ul>
				<li tabIndex='0'>
					<NavLink to='/delivery-and-returns' activeClassName={styles.active}>
						Delivery and Returns
					</NavLink>
				</li>
				<li tabIndex='0'>
					<NavLink to='/privacy-policy' activeClassName={styles.active}>
						Privacy Policy
					</NavLink>
				</li>
				<img className={styles.logo} src={logo} alt='Logo Ocean Dive' />
				<li tabIndex='0'>
					<NavLink to='/terms-and-conditions' activeClassName={styles.active}>
						Terms and Conditions
					</NavLink>
				</li>
				<li tabIndex='0'>
					<NavLink to='/legal-advice' activeClassName={styles.active}>
						Legal Advice
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
