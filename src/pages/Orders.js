import { OrdersList } from '../components/Shop/Orders/OrdersList';

const Orders = () => {
	return (
		<div>
			<div className='pageWithPadding'>
				<h1>Your Orders</h1>
				<OrdersList />
			</div>
		</div>
	);
};

export default Orders;
