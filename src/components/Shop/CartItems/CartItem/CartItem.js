import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/cartSlice';
import styles from './CartItem.module.css';

import PriceTag from '../../ProductFeatures/PriceTag/PriceTag';
import Counter from '../../ProductFeatures/Counter/Counter';

import DUMMY_PRODUCTS from '../../../../dummy_products/DUMMY_PRODUCTS';
import ATTRIBUTES from '../../../../dummy_products/attributes';

const CartItem = props => {
	const dispatch = useDispatch();

	const jsonFile = JSON.stringify(DUMMY_PRODUCTS);
	console.log(jsonFile);

	const fullProductInfo = DUMMY_PRODUCTS.find(
		product => product.sku === props.product.sku
	);

	const currentColor = ATTRIBUTES[0].options.find(colorSwatch => {
		return colorSwatch.code === props.product.color;
	});

	return (
		<li className={styles.cartItem}>
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
						onAdd={_ => {
							dispatch(
								cartActions.addToCart({
									productDetails: props.product,
									quantity: 1,
								})
							);
						}}
						onRemove={_ => {
							console.log('remove item');
						}}
					/>
				</div>
			</div>

			<p className={styles.price}>
				<PriceTag product={fullProductInfo} quantity={props.product.quantity} />
			</p>
		</li>
	);
};

export default CartItem;
