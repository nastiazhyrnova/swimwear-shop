import styles from './FooterNav.module.css';
import logo from '../../../assets/logo-without-text.svg';

const FooterNav = _ => {
	return (
		<nav className={styles.footerNav}>
			<ul>
				<li tabIndex='0'>Delivery and Returns</li>
				<li tabIndex='0'>Privacy Policy</li>

				<img className={styles.logo} src={logo} alt='Logo Ocean Dive' />

				<li tabIndex='0'>Terms and Conditions</li>
				<li tabIndex='0'>Legal Advice</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
