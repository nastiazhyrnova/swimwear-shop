import PropTypes from 'prop-types';

import Button from '../../../UI/Buttons/Button/Button';

import styles from './Filters.module.css';
import filterIcon from '../../../../assets/icons/filter.svg';

const Filters = props => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.filterContainter}>
				<button className={styles.filterButton} title='Filter'>
					<span>
						<img src={filterIcon} alt='Filter icon' />
						Filter
					</span>
				</button>
			</div>
			<div className={styles.sortContainer}>
				<select id='Sort products' title='Sort by'>
					<option value=''>Sort by:</option>
					<option value='priceasc'>Price: ascending</option>
					<option value='pricedesc'>Price: descending</option>
					<option value='popular'>Popularity</option>
					<option value='onSale'>Discount</option>
				</select>
			</div>
			<div></div>
		</div>
	);
};

Filters.propTypes = {};

export default Filters;
