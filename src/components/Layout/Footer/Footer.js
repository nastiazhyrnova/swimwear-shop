import FooterNav from '../../Navigation/FooterNavigation/FooterNav';

import styles from './Footer.module.css';

const Footer = _ => {
	return (
		<footer className={styles.footer}>
			<FooterNav />
		</footer>
	);
};

export default Footer;
