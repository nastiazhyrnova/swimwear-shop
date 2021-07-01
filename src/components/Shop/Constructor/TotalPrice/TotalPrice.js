import PropTypes from 'prop-types';

import formatPrice from '../../../../utilities/formatPrice';
import calculateSalePrice from '../../../../utilities/calculateSalePrice';
import styles from './TotalPrice.module.css';

const TotalPrice = props => {
	let topPrice = props.topProduct.price;
	let bottomPrice = props.bottomProduct.price;
	let topSalePrice = topPrice;
	let bottomSalePrice = bottomPrice;

	if (props.topProduct.sale.onSale) {
		topSalePrice = calculateSalePrice(
			props.topProduct.price,
			props.topProduct.sale.discount
		);
	}

	if (props.bottomProduct.sale.onSale) {
		bottomSalePrice = calculateSalePrice(
			props.bottomProduct.price,
			props.bottomProduct.sale.discount
		);
	}

	return (
		<>
			{topSalePrice + bottomSalePrice !== topPrice + bottomPrice ? (
				<>
					<h2>
						Total:{' '}
						<s className={styles.discountedPrice}>
							{formatPrice(topPrice + bottomPrice)}
						</s>{' '}
						<span className={styles.salePrice}>
							{formatPrice(topSalePrice + bottomSalePrice)}
						</span>
					</h2>
				</>
			) : (
				<h2>Total: {formatPrice(topPrice + bottomPrice)}</h2>
			)}
		</>
	);
};

TotalPrice.propTypes = {
	topProduct: PropTypes.object,
	bottomProduct: PropTypes.object,
};

export default TotalPrice;
