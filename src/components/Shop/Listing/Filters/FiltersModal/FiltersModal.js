import Modal from '../../../../UI/Modal/Modal';
import ColorList from '../../../../Shop/ProductFeatures/ColorsList/ColorsList';

import styles from './FiltersModal.module.css';

const FiltersModal = props => {
	return (
		<Modal close={props.close} title='Filter products'>
			<div className={styles.filtersModalContainer}>
				<div className={styles.filterColumn}>
					<h4>Color</h4>
					<ColorList type='checkbox' changeSelectedColor={_ => {}} />
				</div>
				<div className={styles.filterColumn}>
					<h4>Category</h4>
				</div>
				<div className={styles.filterColumn}>
					<h4>Size</h4>
				</div>
			</div>
		</Modal>
	);
};

export default FiltersModal;
