import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../../../UI/Buttons/Button/Button';
import ColorList from '../../../ProductFeatures/ColorsList/ColorsList';
import SizesList from '../../../ProductFeatures/SizesList/SizesList';

import styles from './FiltersAccordeon.module.css';

const FiltersAccordeon = props => {
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

	const filterBySizeHandler = size => {
		if (!!chosenFilters.sizes.find(existingSize => existingSize === size)) {
			setChosenFilters(prevState => {
				const newSizes = chosenFilters.sizes.filter(
					existingSize => existingSize !== size
				);
				return { ...prevState, sizes: newSizes };
			});
		} else {
			setChosenFilters(prevState => {
				return {
					...prevState,
					sizes: prevState.sizes.concat(size),
				};
			});
		}
	};

	const applyFilters = _ => {
		props.filterBy({
			color: chosenFilters.color,
			category: chosenFilters.category,
			sizes: chosenFilters.sizes,
		});
		props.toggleFiltersAccordeon();
	};

	const resetChosenFilters = _ => {
		setChosenFilters({
			category: null,
			color: null,
			sizes: [],
		});
		props.filterBy({
			color: null,
			category: null,
			sizes: [],
		});
		props.toggleFiltersAccordeon();
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
		<aside
			close={props.close}
			title='Filter products'
			className={styles.dropDownContainer}>
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
							changeSelectedSize={size => filterBySizeHandler(size)}
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
		</aside>
	);
};

FiltersAccordeon.propTypes = {
	filters: PropTypes.object,
	filterBy: PropTypes.func,
};

export default FiltersAccordeon;
