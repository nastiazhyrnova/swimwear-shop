import { checkoutActions } from './checkoutSlice';
import { cartActions } from '../cart/cartSlice';
import { autoHideNotificationAction } from '../notification/notification-actions';

export const postOrderAction = orderDetails => {
	return async dispatch => {
		const fetchData = async orderDetails => {
			const response = await fetch(
				'https://bikini-shop-25276-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
				{
					method: 'POST',
					body: JSON.stringify(orderDetails),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (!response.ok) {
				throw new Error('Could not submit your order');
			} else {
				const data = await response.json();
				return data;
			}
		};

		try {
			const fetchedData = await fetchData(orderDetails);
			console.log(fetchedData);
			dispatch(
				autoHideNotificationAction(
					`Your order has been paid sucessfully. Order number is ${fetchedData.name}`
				)
			);
			dispatch(cartActions.emptyCart());
			dispatch(checkoutActions.resetData());
		} catch (err) {
			dispatch(autoHideNotificationAction(err.toString()));
		}
	};
};
