const calculateSalePrice = (price, discount) =>
	price - price * (discount / 100);

export default calculateSalePrice;
