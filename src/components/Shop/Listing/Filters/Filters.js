import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import FiltersAccordeon from './FiltersAccordeon/FiltersAccordeon';

import styles from './Filters.module.css';
import filterIcon from '../../../../assets/icons/filter.svg';

const Filters = props => {
	const sortingRef = useRef();

	const [showFiltersAccordeon, setShowFiltersAccordeon] = useState(false);

	const setSortValue = () => {
		let by = null;
		let asc = true;
		if (sortingRef.current.value === 'priceasc') {
			by = 'price';
			asc = true;
		} else if (sortingRef.current.value === 'pricedesc') {
			by = 'price';
			asc = false;
		} else if (sortingRef.current.value === 'popular') {
			by = 'popular';
			asc = true;
		} else if (sortingRef.current.value === 'onSale') {
			by = 'onSale';
			asc = true;
		}
		props.sortBy({ by: by, asc: asc });
	};

	const toggleFiltersAccordeon = () => {
		setShowFiltersAccordeon(!showFiltersAccordeon);
	};

	return (
		<>
			<div className={styles.mainContainer}>
				<div className={styles.filterContainter}>
					<button
						className={styles.filterButton}
						title='Show filters'
						onClick={toggleFiltersAccordeon}>
						<span>
							<img src={filterIcon} alt='Filter icon' />
							Filter
						</span>
					</button>
				</div>
				<div className={styles.sortContainer}>
					<select
						id='Sort products'
						title='Sort by'
						onChange={setSortValue}
						ref={sortingRef}>
						<option value=''>Sort by:</option>
						<option value='priceasc'>Price: ascending</option>
						<option value='pricedesc'>Price: descending</option>
						<option value='popular'>Most popular</option>
					</select>
				</div>
				<div></div>
			</div>
			{showFiltersAccordeon && (
				<FiltersAccordeon
					filters={props.filters}
					filterBy={props.filterBy}
					toggleFiltersAccordeon={toggleFiltersAccordeon}
				/>
			)}
		</>
	);
};

Filters.propTypes = {
	sortBy: PropTypes.func.isRequired,
	filters: PropTypes.object,
	filterBy: PropTypes.func,
};

export default Filters;
