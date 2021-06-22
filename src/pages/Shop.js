import { useState } from 'react';

import ProductListing from '../components/Shop/Listing/ProductListing';
import Filters from '../components/Shop/Listing/Filters/Filters';

const Shop = _ => {
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
		setSorting({
			by: by,
			asc: asc,
		});
	};

	const filterByColor = color => {
		console.log('filterByColor [Shop]');
		setFilters(prevState => ({ ...prevState, color: color }));
	};
	const filterByCategory = category => {
		setFilters(prevState => ({ ...prevState, category: category }));
	};

	const filterBySize = _ => {}; // TODO

	const resetFilters = _ => {
		setFilters({
			color: null,
			category: null,
			sizes: [],
		});
	};

	return (
		<>
			<h1>Shop</h1>
			<Filters
				sortBy={sortBy}
				filters={filters}
				filterByColor={filterByColor}
				filterByCategory={filterByCategory}
				filterBySize={filterBySize}
				resetFilters={resetFilters}
			/>
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

// *IDEA: use query params to save the search for location property
