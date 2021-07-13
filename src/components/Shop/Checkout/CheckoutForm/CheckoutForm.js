import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';

import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Buttons/Button/Button';

import { autoHideNotificationAction } from '../../../../store/notification/notification-actions';
import formatPrice from '../../../../utilities/formatPrice';
import {
	calculateDiscountedTotal,
	calculateSubtotal,
} from '../../../../utilities/calculateCartTotals';
import { checkoutActions } from '../../../../store/checkout/checkoutSlice';
import styles from './CheckoutForm.module.css';

const validateInputLength = (input, length) => input.trim().length >= length;

const CheckoutForm = _ => {
	const cartStore = useSelector(state => state.cart);
	const productsStore = useSelector(state => state.products);

	const nameRef = useRef();
	const streetRef = useRef();
	const cityRef = useRef();
	const postalCodeRef = useRef();
	const additionalinfoRef = useRef();
	const shippingMethodRef = useRef();

	const [shippingCost, setShippingCost] = useState(null);
	// const [formIsValid, setFormIsValid] = useState(false);

	const history = useHistory();
	const dispatch = useDispatch();

	let subtotal = calculateSubtotal(cartStore, productsStore.products);
	let discountedTotal = calculateDiscountedTotal(
		cartStore,
		productsStore.products
	);

	const validateForm = _ =>
		validateInputLength(nameRef.current.value, 8) &&
		validateInputLength(streetRef.current.value, 8) &&
		validateInputLength(cityRef.current.value, 3) &&
		validateInputLength(postalCodeRef.current.value, 5) &&
		shippingCost >= 0;

	const goToPayment = e => {
		e.preventDefault();
		if (validateForm()) {
			dispatch(checkoutActions.setShippingCost(shippingCost));
			dispatch(
				checkoutActions.setDeliveryAddress({
					name: nameRef.current.value,
					street: streetRef.current.value,
					city: cityRef.current.value,
					postalCode: postalCodeRef.current.value,
					additionalInfo: additionalinfoRef.current
						? additionalinfoRef.current.value
						: '',
				})
			);

			history.push('/payment');
		} else {
			let message = 'Form is not valid, please check entered data';
			switch (false) {
				case validateInputLength(nameRef.current.value, 8):
					message = 'Name should be at least 8 characters without spaces';
					break;
				case validateInputLength(streetRef.current.value, 8):
					message = 'Street should be at least 8 characters without spaces';
					break;
				case validateInputLength(cityRef.current.value, 8):
					message = 'City should be at least 3 characters without spaces';
					break;
				case validateInputLength(postalCodeRef.current.value, 8):
					message =
						'Postal code should be at least 5 characters without spaces';
					break;
				default:
					message = 'Form is not valid, please check entered data';
					break;
			}
			dispatch(autoHideNotificationAction(message));
		}
	};

	const shippingMethodHandler = e => {
		e.preventDefault();
		if (shippingMethodRef.current.value === 'fast') {
			setShippingCost(5);
		} else if (shippingMethodRef.current.value === 'economy') {
			setShippingCost(0);
		}
	};
	return (
		<div>
			<form onSubmit={goToPayment}>
				<p className={styles.title}>Address and personal information:</p>
				<Input
					name='name'
					title='Name and last name'
					type='text'
					min='8'
					required={true}
					ref={nameRef}
				/>
				<Input
					name='street'
					title='Street name, building and apartment number'
					type='text'
					min='8'
					required={true}
					ref={streetRef}
				/>
				<Input
					name='city'
					title='City/Town'
					type='text'
					min='3'
					required={true}
					ref={cityRef}
				/>
				<Input
					name='postalcode'
					title='Postal code'
					type='text'
					min='5'
					required={true}
					ref={postalCodeRef}
				/>
				<Input name='additionalinfo' title='Observations:' type='text' />
				<p className={styles.title}>Shipping method:</p>
				<div className={styles.shippingContainer}>
					<div className={styles.shippingMethod}>
						<select
							name='shipping'
							id='shipping'
							onChange={shippingMethodHandler}
							ref={shippingMethodRef}
							className={styles.dropDown}>
							<option value='economy'>Economy: 3-5 working days (free)</option>
							<option value='fast'>Fast: 1-day delivery (+ 5€)</option>
						</select>
					</div>
				</div>
				<hr />
				<div className={styles.priceContainer}>
					{subtotal !== discountedTotal && (
						<>
							<p>Subtotal: {formatPrice(subtotal)}</p>
							<p>
								Discount:{' '}
								<span className={styles.discount}>
									-{formatPrice(subtotal - discountedTotal)}
								</span>{' '}
							</p>
						</>
					)}
					<p>
						Shipping cost:{' '}
						{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
					</p>
					<p>
						Total:{' '}
						<span className={styles.total}>
							{formatPrice(discountedTotal + shippingCost)}
						</span>{' '}
					</p>
					<hr />
				</div>

				<Button inversed>Confirm and pay</Button>
			</form>
		</div>
	);
};

export default CheckoutForm;
