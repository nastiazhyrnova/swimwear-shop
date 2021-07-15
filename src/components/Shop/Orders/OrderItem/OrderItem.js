import PropTypes from 'prop-types';

import OrderProduct from './OrderProduct/OrderProduct';

import formatPrice from '../../../../utilities/formatPrice';
import styles from './OrderItem.module.css';

const OrderItem = props => {
	const products = props.order.products.map(product => (
		<OrderProduct
			sku={product.sku}
			color={product.color}
			size={product.size}
			quantity={product.quantity}
		/>
	));

	const date = new Date(props.order.date);

	const day = date.getDay();
	const month = date.getMonth();
	const year = date.getFullYear();

	return (
		<div className={styles.orderItemContainer}>
			<div className={styles.orderInfo}>
				<span>Order No.: {props.order.id}</span>
				<span>
					Date: {day}/{month}/{year}
				</span>
			</div>
			<div className={styles.header}>
				<OrderProduct color='Color' size='Size' quantity='Quantity' />
			</div>
			<div className={styles.body}>{products}</div>
			<div className={styles.summary}>
				Total: {formatPrice(props.order.subtotal)}
			</div>
		</div>
	);
};

OrderItem.propTypes = {};

export default OrderItem;
