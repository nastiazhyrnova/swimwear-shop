import useScrollToTop from '../hooks/use-scroll-to-top';

import ProductListing from '../components/Shop/Listing/ProductListing';

const Shop = _ => {
	useScrollToTop();
	//TODO: scrollToTop Doesn't work
	return (
		<>
			<h1>Shop</h1>
			<ProductListing showFilters />
		</>
	);
};

export default Shop;
