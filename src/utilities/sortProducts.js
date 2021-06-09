import calculateSalePrice from './calculateSalePrice';

//TODO: add sorting by discount

const sortProducts = (products, asc = true, by) => {
	if (asc === true) {
		switch (true) {
			case by === 'price':
				return products.sort((a, b) => {
					let aPrice = a.price;
					let bPrice = b.price;
					if (a.sale.onSale && b.sale.onSale) {
						//if both are on sale
						aPrice = calculateSalePrice(a.price, a.sale.discount);
						bPrice = calculateSalePrice(b.price, b.sale.discount);
					} else if (a.sale.onSale) {
						//if only product a is onSale
						aPrice = calculateSalePrice(a.price, a.sale.discount);
					} else if (b.sale.onSale) {
						//if only product b is on sale
						bPrice = calculateSalePrice(b.price, b.sale.discount);
					}
					return aPrice > bPrice ? 1 : -1;
				});
			case by === 'popular':
				return products.sort((a, b) =>
					a.bestseller === b.bestseller ? 0 : a.bestseller ? -1 : 1
				);
			default:
				return products;
		}
	} else if (asc === false) {
		switch (true) {
			case by === 'price':
				return products.sort((a, b) => {
					let aPrice = a.price;
					let bPrice = b.price;
					if (a.sale.onSale && b.sale.onSale) {
						//if both are on sale
						aPrice = calculateSalePrice(a.price, a.sale.discount);
						bPrice = calculateSalePrice(b.price, b.sale.discount);
					} else if (a.sale.onSale) {
						//if only product a is onSale
						aPrice = calculateSalePrice(a.price, a.sale.discount);
					} else if (b.sale.onSale) {
						//if only product b is on sale
						bPrice = calculateSalePrice(b.price, b.sale.discount);
					}
					return aPrice > bPrice ? -1 : 1;
				});
			case by === 'popular':
				return products.sort((a, b) =>
					a.bestseller === b.bestseller ? 0 : a.bestseller ? 1 : -1
				);
			default:
				return products;
		}
	} else {
		return products;
	}
};

export default sortProducts;
