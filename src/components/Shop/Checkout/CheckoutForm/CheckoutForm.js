import { useState } from 'react';
import { useSelector } from 'react-redux';

import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Buttons/Button/Button';

import formatPrice from '../../../../utilities/formatPrice';
import {
	calculateDiscountedTotal,
	calculateSubtotal,
} from '../../../../utilities/calculateCartTotals';
import styles from './CheckoutForm.module.css';

const CheckoutForm = _ => {
	const cartStore = useSelector(state => state.cart);
	const productsStore = useSelector(state => state.products);

	const [fastShipping, setFastShipping] = useState(false);

	// console.log(shippingRef.current.value);

	let subtotal = calculateSubtotal(cartStore, productsStore.products);
	let discountedTotal = calculateDiscountedTotal(
		cartStore,
		productsStore.products
	);
	let shippingCost = 0;

	if (fastShipping) {
		shippingCost = 5;
	}

	return (
		<div>
			<form>
				<p className={styles.title}>Address and personal information:</p>
				<Input
					name='name'
					title='Name and last name'
					type='text'
					min='8'
					required={true}
				/>
				<Input
					name='street'
					title='Street name, building and apartment number'
					type='text'
					min='8'
					required={true}
				/>
				<Input
					name='city'
					title='City/Town'
					type='text'
					min='3'
					required={true}
				/>
				<Input
					name='postalcode'
					title='Postal code'
					type='text'
					min='5'
					required={true}
				/>
				<Input name='additionalinfo' title='Observations:' type='text' />
				<p className={styles.title}>Shipping method:</p>
				<div className={styles.shippingContainer}>
					<div
						className={styles.shippingMethod}
						onClick={_ => setFastShipping(false)}>
						<input
							type='radio'
							id='economy'
							name='shipping'
							value='economy'
							checked
						/>
						<label htmlFor='economy'>Economy: 3-5 working days (free) </label>
					</div>

					<div
						className={styles.shippingMethod}
						onClick={_ => setFastShipping(true)}>
						<input type='radio' id='fast' name='shipping' value='fast' />
						<label htmlFor='fast'>Fast: 1-day delivery (+ 5€)</label>
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
