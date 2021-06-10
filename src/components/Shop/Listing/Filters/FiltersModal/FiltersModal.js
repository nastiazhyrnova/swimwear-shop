import { useSelector } from 'react-redux';

import Modal from '../../../../UI/Modal/Modal';
import Button from '../../../../UI/Buttons/Button/Button';
import ColorList from '../../../../Shop/ProductFeatures/ColorsList/ColorsList';
import SizesList from '../../../../Shop/ProductFeatures/SizesList/SizesList';

import styles from './FiltersModal.module.css';

const FiltersModal = props => {
	const productsStore = useSelector(state => state.products);

	let categories;
	if (productsStore.products.length > 0) {
		const allCategories = productsStore.products.map(
			product => product.category
		);
		const uniqueCategories = [...new Set(allCategories)];
		categories = uniqueCategories.map(category => (
			<p className={styles.category} key={category}>
				{category}
			</p>
		));
	}

	return (
		<Modal close={props.close} title='Filter products'>
			<div className={styles.modalContainer}>
				<div className={styles.filtersContainer}>
					<div className={styles.filterColumn}>
						<h4>Color</h4>
						<ColorList type='radio' changeSelectedColor={_ => {}} />
					</div>
					<div className={styles.filterColumn}>
						<h4>Category</h4>
						<div>{categories}</div>
					</div>
					<div className={styles.filterColumn}>
						<h4>Size</h4>
						<SizesList type='checkbox' changeSelectedSize={_ => {}} />
					</div>
				</div>
				<div className={styles.buttonContainer}>
					<Button onClick={_ => {}} grey>
						Reset
					</Button>
					<Button onClick={_ => {}} inversed>
						Apply Filters
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default FiltersModal;
