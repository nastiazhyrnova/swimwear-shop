import { useState } from 'react';

import ProductListing from '../components/Shop/Listing/ProductListing';
import Filters from '../components/Shop/Listing/Filters/Filters';

const Shop = () => {
	const [sorting, setSorting] = useState({
		by: null,
		asc: true,
	});
	const [filters, setFilters] = useState({
		color: null,
		category: null,
		sizes: [],
	});

	const sortBy = ({ by, asc }) => {
		setSorting({ by, asc });
	};

	const filterBy = ({ color, sizes, category }) => {
		setFilters({ color, category, sizes });
	};

	return (
		<>
			<h1>Shop</h1>
			<Filters sortBy={sortBy} filters={filters} filterBy={filterBy} />
			<ProductListing
				sort={sorting}
				category={filters.category}
				filterColor={filters.color}
				filterSizes={filters.sizes}
			/>
		</>
	);
};

export default Shop;

// TODO: add scroll to top
// *IDEA: use query params to save the search for location property
