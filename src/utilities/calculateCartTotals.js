import calculateSalePrice from './calculateSalePrice';

export const calculateSubtotal = (cart, products) =>
	cart
		.map(cartItem => {
			const productInfo = products.find(
				product => product.sku === cartItem.sku
			);
			return cartItem.quantity * productInfo.price;
		})
		.reduce((accumulator, currentValue) => accumulator + currentValue);

export const calculateDiscountedTotal = (cart, products) =>
	cart
		.map(cartItem => {
			const productInfo = products.find(
				product => product.sku === cartItem.sku
			);
			let discountedPrice = productInfo.price;
			if (productInfo.sale.onSale) {
				discountedPrice = calculateSalePrice(
					productInfo.price,
					productInfo.sale.discount
				);
			}
			return cartItem.quantity * discountedPrice;
		})
		.reduce((accumulator, currentValue) => accumulator + currentValue);
