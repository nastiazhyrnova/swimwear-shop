const calculateSalePrice = (price, discount) =>
	Math.round(price - price * (discount / 100));

export default calculateSalePrice;
