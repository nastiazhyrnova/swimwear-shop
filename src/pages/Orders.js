import { OrdersList } from '../components/Shop/Orders/OrdersList';

const Orders = _ => {
	console.log('rendering [Orders] page');
	return (
		<div>
			<h1>Your Orders</h1>
			<OrdersList />
		</div>
	);
};

export default Orders;
