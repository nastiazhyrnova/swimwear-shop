import styles from './CartItem.module.css';

import PriceTag from '../../ProductFeatures/PriceTag/PriceTag';
import Counter from '../../ProductFeatures/Counter/Counter';

import DUMMY_PRODUCTS from '../../../../dummy_products/DUMMY_PRODUCTS';
import ATTRIBUTES from '../../../../dummy_products/attributes';

const CartItem = props => {
	const fullProductInfo = DUMMY_PRODUCTS.find(
		product => product.sku === props.product.sku
	);

	const currentColor = ATTRIBUTES[0].options.find(colorSwatch => {
		return colorSwatch.sku === props.product.color;
	});

	return (
		<li className={styles.cartItem}>
			<div className={styles.infoContainer}>
				<p className={styles.title}>{fullProductInfo.title}</p>
				<p className={styles.ref}>Ref.: {props.product.sku}</p>
				<div className={styles.productVariations}>
					<p className={styles.color}>Color: {currentColor.value}</p>
					<p className={styles.size}>Size: {props.product.size}</p>
				</div>
				<p className={styles.quantity}>
					<Counter
						currentQuantity={props.product.quantity}
						onAdd={_ => {
							console.log('add item ');
						}}
						onRemove={_ => {
							console.log('remove item');
						}}
					/>
				</p>
			</div>

			<p className={styles.price}>
				<PriceTag product={fullProductInfo} />
			</p>
		</li>
	);
};

export default CartItem;
