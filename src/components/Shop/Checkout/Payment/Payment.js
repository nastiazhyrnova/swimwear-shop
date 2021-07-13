import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Buttons/Button/Button';

import { calculateDiscountedTotal } from '../../../../utilities/calculateCartTotals';
import styles from './Payment.module.css';

const Payment = _ => {
	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();
	const history = useHistory();

	const cartStore = useSelector(state => state.cart);
	const checkoutStore = useSelector(state => state.checkout);
	const productsStore = useSelector(state => state.products);

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [processing, setProcessing] = useState(false);
	const [succeeded, setSucceeded] = useState(false);
	const [clientSecret, setClientSecret] = useState(null);

	useEffect(
		_ => {
			const getClientSecret = async _ => {
				console.log(
					(calculateDiscountedTotal(cartStore, productsStore.products) +
						checkoutStore.shippingCost) *
						100
				);
				const response = await fetch(
					`http://localhost:5001/bikini-shop-25276/us-central1/api/payments/create?total=${
						(calculateDiscountedTotal(cartStore, productsStore.products) +
							checkoutStore.shippingCost) *
						100
					}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				if (!response.ok) {
					throw new Error(`Couldn't process the payment`);
				} else {
					const data = await response.json();
					setClientSecret(data.clientSecret);
					return data;
				}
			};

			getClientSecret();
		},
		[checkoutStore.shippingCost, cartStore, productsStore.products]
	);
	console.log(clientSecret);

	const submitPayment = async e => {
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				//payment intent = payment confirmation
				setSucceeded(true);
				setError(null);
				setProcessing(false);

				history.replace('/orders');
			});
	};

	const cardChangeHandler = e => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '');
	};

	return (
		<div>
			<h3>Payment</h3>

			<form className={styles.form} onSubmit={submitPayment}>
				<CardElement onChange={cardChangeHandler} />
				<div></div>
				<Button
					inversed
					disabled={processing || disabled || succeeded}
					additionalClass={styles.button}>
					{processing ? 'Processing' : 'Buy now'}
				</Button>
			</form>
			{error && <div className={styles.error}>{error}</div>}
			<p className={styles.demo}>
				<i>*Demo card: fill everything with 42424242....</i>
			</p>
		</div>
	);
};

export default Payment;
