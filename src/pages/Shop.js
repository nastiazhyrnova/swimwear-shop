import { useSelector } from 'react-redux';

import ProductListing from '../components/Shop/Listing/ProductListing';
import Filters from '../components/Shop/Listing/Filters/Filters';

const Shop = _ => {
	const shopFiltersStore = useSelector(state => state.shopFilters);
	const shopSortStore = useSelector(state => state.shopSort);

	return (
		<>
			<h1>Shop</h1>
			<Filters />
			<ProductListing
				sort={shopSortStore}
				category={shopFiltersStore.category}
				colorFilter={shopFiltersStore.color}
			/>
		</>
	);
};

export default Shop;
