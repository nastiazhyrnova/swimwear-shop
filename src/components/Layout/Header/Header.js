import { Link } from 'react-router-dom';

import MainNavItems from '../../Navigation/MainNavigation/MainNavItems';
import ShopNavItems from '../../Navigation/ShopNavigation/ShopNavItems';
import HiddenButton from '../../UI/Buttons/HiddenButton/HiddenButton';

import styles from './Header.module.css';
import logo from '../../../assets/logo-with-text-horizontal.svg';

const Header = _ => {
	return (
		<header className={styles.header}>
			<Link to='/'>
				<HiddenButton label='Ocean Dive'>
					<img className={styles.logo} src={logo} alt='Logo Ocean Dive' />
				</HiddenButton>
			</Link>
			<MainNavItems />
			<ShopNavItems />
		</header>
	);
};

export default Header;
