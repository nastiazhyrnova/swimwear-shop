import ProductListing from '../components/Shop/Listing/ProductListing';

const Shop = _ => {
	let category = null;

	return (
		<>
			<h1>Shop</h1>
			<ProductListing showFilters />
		</>
	);
};

export default Shop;
