import { useSelector } from 'react-redux';

import SideBarCard from '../../components/UI/Sidebar/SideBarCard/SideBarCard';
import UserAccountNav from '../../components/Navigation/UserAccountNavigation/UserAccountNav';
import AuthSidebar from './AuthSidebar';

const UserAccount = props => {
	const authStore = useSelector(state => state.auth);
	return (
		<SideBarCard title='Your Profile'>
			{!!authStore.token ? <UserAccountNav /> : <AuthSidebar />}
		</SideBarCard>
	);
};

export default UserAccount;
