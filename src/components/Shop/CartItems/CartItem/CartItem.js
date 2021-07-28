import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../../store/cart/cartSlice';

import PriceTag from '../../ProductFeatures/PriceTag/PriceTag';
import Counter from '../../ProductFeatures/Counter/Counter';

import styles from './CartItem.module.css';
import binIcon from '../../../../assets/icons/bin.svg';

const CartItem = props => {
	const dispatch = useDispatch();
	const productsStore = useSelector(state => state.products);

	let output = 'Can not load the product';

	if (productsStore.products.length !== 0) {
		const fullProductInfo = productsStore.products.find(
			product => product.sku === props.product.sku
		);

		const currentColor = productsStore.attributes.color.find(colorSwatch => {
			return colorSwatch.code === props.product.color;
		});

		output = (
			<>
				<div className={styles.infoContainer}>
					<p className={styles.title}>{fullProductInfo.title}</p>
					<p className={styles.ref}>Ref.: {props.product.sku}</p>
					<div className={styles.productVariations}>
						<p className={styles.color}>Color: {currentColor.title}</p>
						<p className={styles.size}>Size: {props.product.size}</p>
					</div>
					<div className={styles.quantity}>
						<Counter
							currentQuantity={props.product.quantity}
							onAdd={() => {
								dispatch(
									cartActions.addToCart({
										product: props.product,
										quantity: 1,
									})
								);
							}}
							onRemove={() => {
								dispatch(
									cartActions.reduceQuantity({
										product: props.product,
										quantity: 1,
									})
								);
							}}
						/>
					</div>
				</div>

				<p className={styles.price}>
					<PriceTag
						product={fullProductInfo}
						quantity={props.product.quantity}
					/>
				</p>

				<div className={styles.delete}>
					<img
						src={binIcon}
						alt='Remove product(s)'
						title='Remove product(s)'
						onClick={() => {
							dispatch(cartActions.removeFromCart({ product: props.product }));
						}}
					/>
				</div>
			</>
		);
	}

	return <li className={styles.cartItem}>{output}</li>;
};

export default CartItem;
