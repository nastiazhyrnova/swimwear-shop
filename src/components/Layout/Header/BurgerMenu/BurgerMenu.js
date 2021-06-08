import { useDispatch, useSelector } from 'react-redux';
import { sidebarActions } from '../../../../store/sidebar/sidebarSlice';

import styles from './BurgerMenu.module.css';

import BurgerButton from './BurgerButton/BurgerButton';
import Sidebar from '../../../UI/Sidebar/Sidebar';
import SideBarCard from '../../../UI/Sidebar/SideBarCard/SideBarCard';
import MainNavItems from '../../../Navigation/MainNavigation/MainNavItems';

const BurgerMenu = () => {
	const dispatch = useDispatch();
	const sidebarStore = useSelector(state => state.sidebar);

	const openSidebar = _ => {
		dispatch(sidebarActions.openSidebar({ sidebar: 'mobileMenu' }));
	};
	const closeSidebar = _ => {
		dispatch(sidebarActions.closeSidebar());
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
			{sidebarStore.mobileMenu.show && sidebarMenu}
		</>
	);
};

export default BurgerMenu;
