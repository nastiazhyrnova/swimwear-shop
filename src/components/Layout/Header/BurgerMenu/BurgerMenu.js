import { useState } from 'react';

import styles from './BurgerMenu.module.css';

import BurgerButton from './BurgerButton/BurgerButton';
import Sidebar from '../../../UI/Sidebar/Sidebar';
import SideBarCard from '../../../UI/Sidebar/SideBarCard/SideBarCard';
import MainNavItems from '../../../Navigation/MainNavigation/MainNavItems';

const BurgerMenu = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	const openSidebar = _ => {
		setShowSidebar(true);
	};
	const closeSidebar = _ => {
		setShowSidebar(false);
	};

	const sidebarMenu = (
		<Sidebar left closeFunc={closeSidebar}>
			<SideBarCard title='Menu'>
				<MainNavItems closeSidebar={closeSidebar} />
			</SideBarCard>
		</Sidebar>
	);

	return (
		<>
			<BurgerButton onClick={openSidebar} />
			{showSidebar && sidebarMenu}
		</>
	);
};

export default BurgerMenu;
