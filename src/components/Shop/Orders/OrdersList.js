import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import OrderItem from './OrderItem/OrderItem';

import styles from './OrdersList.module.css';

export const OrdersList = _ => {
	const authStore = useSelector(state => state.auth);
	const [orders, setOrders] = useState([]);

	useEffect(
		_ => {
			const fetchOrders = async _ => {
				const response = await fetch(
					'https://bikini-shop-25276-default-rtdb.europe-west1.firebasedatabase.app/orders.json'
				);
				if (!response.ok) {
					throw new Error('Could not fetch orders');
				} else {
					const data = await response.json();
					if (data) {
						const ordersArray = Object.values(data);
						const idArray = Object.keys(data);
						const allOrders = ordersArray.map((order, index) => {
							order.id = idArray[index];
							return order;
						});
						const userOrders = allOrders.filter(
							order => order.userId === authStore.userId
						);
						setOrders(userOrders);
					}
				}
			};
			fetchOrders();
		},
		[authStore.userId]
	);

	let output = 'No orders found';

	if (orders.length > 0) {
		output = orders.map(order => <OrderItem order={order} key={order.id} />);
	}
	return <div>{output}</div>;
};
