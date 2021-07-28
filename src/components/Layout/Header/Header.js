import { Link } from 'react-router-dom';
import useReactSimpleMatchMedia from 'react-simple-matchmedia';

import MainNavItems from '../../Navigation/MainNavigation/MainNavItems';
import ShopNavItems from '../../Navigation/ShopNavigation/ShopNavItems';
import HiddenButton from '../../UI/Buttons/HiddenButton/HiddenButton';
import BurgerMenu from './BurgerMenu/BurgerMenu';

import styles from './Header.module.css';
import logo from '../../../assets/logo-with-text-horizontal.svg';

const Header = () => {
	const mobileView = useReactSimpleMatchMedia('phone');
	// const desktopView = useReactSimpleMatchMedia('desktop');
	// const tabletView = useReactSimpleMatchMedia('tablet');

	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				{mobileView && <BurgerMenu />}
				<Link to='/'>
					<HiddenButton onClick={() => {}} label='Ocean Dive'>
						{mobileView ? (
							<img
								className={styles.logoNoText}
								src={logo}
								alt='Logo Ocean Dive'
							/>
						) : (
							<img className={styles.logo} src={logo} alt='Logo Ocean Dive' />
						)}
					</HiddenButton>
				</Link>
			</div>
			{!mobileView && <MainNavItems />}
			<ShopNavItems />
		</header>
	);
};

export default Header;
