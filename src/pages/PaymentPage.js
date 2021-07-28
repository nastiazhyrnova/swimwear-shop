import { useSelector } from 'react-redux';

import Payment from '../components/Shop/Checkout/Payment/Payment';

import { calculateDiscountedTotal } from '../utilities/calculateCartTotals';
import formatPrice from '../utilities/formatPrice';

const PaymentPage = () => {
	const checkoutStore = useSelector(state => state.checkout);
	const cartStore = useSelector(state => state.cart);
	const productsStore = useSelector(state => state.products);
	const discountedTotal = calculateDiscountedTotal(
		cartStore,
		productsStore.products
	);

	return (
		<div className='inputPageContainer'>
			<h1>Checkout</h1>
			<div>
				<h3>Delivery Address</h3>
				<p>{checkoutStore.deliveryAddress.name}</p>
				<p>{checkoutStore.deliveryAddress.street}</p>
				<p>{checkoutStore.deliveryAddress.city}</p>
				<p>{checkoutStore.deliveryAddress.postalCode}</p>
				<p>{checkoutStore.deliveryAddress.additionalInfo}</p>
			</div>
			<hr />
			<div>
				<h3>
					Total (shipping included):{' '}
					{formatPrice(discountedTotal + checkoutStore.shippingCost)}
				</h3>
			</div>
			<hr />
			<Payment />
		</div>
	);
};

export default PaymentPage;
