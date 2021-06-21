import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import FiltersModal from './FiltersModal/FiltersModal';

import { modalActions } from '../../../../store/modal/modalSlice';
import styles from './Filters.module.css';
import filterIcon from '../../../../assets/icons/filter.svg';

const Filters = props => {
	const sortingRef = useRef();
	const modalStore = useSelector(state => state.modal);
	const dispatch = useDispatch();

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
		props.sort({ by, asc });
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
				<FiltersModal close={closeFiltersModal} filterShop={props.filter} />
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
						{/* TODO: add discount sorting */}
						{/* <option value='onSale'>Discount</option> */}
					</select>
				</div>
				<div></div>
			</div>
		</>
	);
};

Filters.propTypes = {
	sort: PropTypes.func,
	filter: PropTypes.func,
};

export default Filters;
