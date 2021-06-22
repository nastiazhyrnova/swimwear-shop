import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from '../../../../UI/Modal/Modal';
import Button from '../../../../UI/Buttons/Button/Button';
import ColorList from '../../../../Shop/ProductFeatures/ColorsList/ColorsList';
import SizesList from '../../../../Shop/ProductFeatures/SizesList/SizesList';

import { modalActions } from '../../../../../store/modal/modalSlice';
import styles from './FiltersModal.module.css';

const FiltersModal = props => {
	const productsStore = useSelector(state => state.products);

	const [chosenFilters, setChosenFilters] = useState({
		category: props.filters.category,
		color: props.filters.color,
		sizes: props.filters.sizes,
	});

	const dispatch = useDispatch();

	const filterByColorHandler = color => {
		if (!chosenFilters.color || chosenFilters.color !== color) {
			setChosenFilters(prevState => ({ ...prevState, color: color }));
		} else {
			// TODO: doesn't uncheck
			setChosenFilters(prevState => ({ ...prevState, color: null }));
		}
	};

	const filterByCategoryHandler = category => {
		if (!chosenFilters.category || chosenFilters.category !== category) {
			setChosenFilters(prevState => ({ ...prevState, category: category }));
		} else {
			setChosenFilters(prevState => ({ ...prevState, category: null }));
		}
	};

	const filterBySizesHandler = size => {
		console.log('filterBySize local function in Modal component');
		// TODO
	};

	const applyFilters = _ => {
		props.filterByCategory(chosenFilters.category);
		props.filterByColor(chosenFilters.color);
		props.filterBySize(chosenFilters.sizes);
		dispatch(modalActions.closeModal({ modal: 'shopFilters' }));
	};

	const resetChosenFilters = _ => {
		setChosenFilters({
			category: null,
			color: null,
			sizes: [],
		});
		props.resetChosenFilters();
		dispatch(modalActions.closeModal({ modal: 'shopFilters' }));
	};

	//get unique category names
	let categories;
	if (productsStore.products.length > 0) {
		const allCategories = productsStore.products.map(
			product => product.category
		);
		const uniqueCategories = [...new Set(allCategories)];
		categories = uniqueCategories.map(category => {
			const categoryStyles = [styles.category];
			if (category === chosenFilters.category) {
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
							selectedColor={chosenFilters.color}
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
							selectedSize={chosenFilters.sizes}
							changeSelectedSize={size => filterBySizesHandler(size)}
						/>
					</div>
				</div>

				<div className={styles.buttonContainer}>
					<Button onClick={resetChosenFilters} grey>
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

FiltersModal.propTypes = {
	filters: PropTypes.object,
	filterByColor: PropTypes.func,
	filterByCategory: PropTypes.func,
	filterBySize: PropTypes.func,
	resetFilters: PropTypes.func,
};

export default FiltersModal;
