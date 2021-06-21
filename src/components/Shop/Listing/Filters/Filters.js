import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import FiltersModal from './FiltersModal/FiltersModal';

import { modalActions } from '../../../../store/modal/modalSlice';
import { shopSortActions } from '../../../../store/shopSort/shopSortSlice';
import styles from './Filters.module.css';
import filterIcon from '../../../../assets/icons/filter.svg';

const Filters = props => {
	const modalStore = useSelector(state => state.modal);
	const dispatch = useDispatch();
	const sortingRef = useRef();

	const setSortValue = _ => {
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
		dispatch(shopSortActions.setSorting({ by: by, asc: asc }));
	};

	const openFiltersModal = _ => {
		dispatch(modalActions.openModal({ modal: 'shopFilters' }));
	};
	const closeFiltersModal = _ => {
		dispatch(modalActions.closeModal({ modal: 'shopFilters' }));
	};

	return (
		<>
			{modalStore.shopFilters.show && (
				<FiltersModal close={closeFiltersModal} />
			)}
			<div className={styles.mainContainer}>
				<div className={styles.filterContainter}>
					<button
						className={styles.filterButton}
						title='Show filters'
						onClick={openFiltersModal}>
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
		</>
	);
};

Filters.propTypes = {};

export default Filters;
