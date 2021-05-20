import SideBarCard from '../../components/UI/Sidebar/SideBarCard/SideBarCard';
import UserAccountNav from '../../components/Navigation/UserAccountNavigation/UserAccountNav';
import AuthPage from './AuthPage';

const UserAccount = props => {
	return (
		<SideBarCard title='Your Profile'>
			{/* <UserAccountNav /> */}
			<AuthPage />
		</SideBarCard>
	);
};

export default UserAccount;
