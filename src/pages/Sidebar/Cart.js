import SideBarCard from '../../components/UI/Sidebar/SideBarCard/SideBarCard';
import CartItems from '../../components/Shop/CartItems/CartItems';

const Cart = props => {
	return (
		<SideBarCard title='Your Shopping Cart'>
			<CartItems />
		</SideBarCard>
	);
};

export default Cart;
