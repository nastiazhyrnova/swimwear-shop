import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../../../../UI/Modal/Modal';
import Button from '../../../../UI/Buttons/Button/Button';
import ColorList from '../../../../Shop/ProductFeatures/ColorsList/ColorsList';
import SizesList from '../../../../Shop/ProductFeatures/SizesList/SizesList';

import { shopFiltersActions } from '../../../../../store/shopFilters/shopFiltersSlice';
import { modalActions } from '../../../../../store/modal/modalSlice';
import styles from './FiltersModal.module.css';
import { filter } from 'lodash';

const FiltersModal = props => {
	const productsStore = useSelector(state => state.products);
	const shopFiltersStore = useSelector(state => state.shopFilters);

	const [filters, setFilters] = useState({
		category: null,
		color: null,
		sizes: [],
	});

	const dispatch = useDispatch();

	const filterByColorHandler = color => {
		setFilters(prevState => ({ ...prevState, color: color }));
	};

	const filterByCategoryHandler = category => {
		setFilters(prevState => ({ ...prevState, category: category }));
	};
	const filterBySizesHandler = size => {
		setFilters(prevState => ({
			...prevState,
			sizes: prevState.sizes.push(size),
		}));
	};

	const applyFilters = _ => {
		dispatch(
			shopFiltersActions.filterByCategory({ category: filters.category })
		);
		dispatch(shopFiltersActions.filterByColor({ color: filters.color }));
		dispatch(shopFiltersActions.filterBySizes({ sizes: filters.sizes }));

		dispatch(modalActions.closeModal({ modal: 'shopFilters' }));
	};

	const resetFilters = _ => {
		dispatch(shopFiltersActions.resetFilters());
		dispatch(modalActions.closeModal({ modal: 'shopFilters' }));
	};

	let categories;
	if (productsStore.products.length > 0) {
		const allCategories = productsStore.products.map(
			product => product.category
		);
		const uniqueCategories = [...new Set(allCategories)];
		categories = uniqueCategories.map(category => {
			const categoryStyles = [styles.category];
			if (category === shopFiltersStore.category) {
				categoryStyles.push(styles.checked);
			}
			return (
				<p
					className={categoryStyles.join(' ')}
					key={category}
					onClick={_ => filterByCategoryHandler(category)}>
					{category}
				</p>
			);
		});
	}

	return (
		<Modal close={props.close} title='Filter products'>
			<div className={styles.modalContainer}>
				<div className={styles.filtersContainer}>
					<div className={styles.filterColumn}>
						<h4>Color</h4>
						<ColorList
							type='radio'
							selectedColor={shopFiltersStore.color}
							changeSelectedColor={color => filterByColorHandler(color)}
						/>
					</div>
					<div className={styles.filterColumn}>
						<h4>Category</h4>
						<div>{categories}</div>
					</div>
					<div className={styles.filterColumn}>
						<h4>Sizes</h4>
						<SizesList
							type='checkbox'
							selectedSize={shopFiltersStore.sizes}
							changeSelectedSize={size => filterBySizesHandler(size)}
						/>
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<Button onClick={resetFilters} grey>
						Reset
					</Button>
					<Button onClick={applyFilters} inversed>
						Apply Filters
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default FiltersModal;
