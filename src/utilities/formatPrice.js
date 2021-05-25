const formatPrice = price => {
	return new Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0,
	}).format(price);
};

export default formatPrice;
