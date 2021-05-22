import { useParams, useHistory } from 'react-router-dom';
import lodash, { cloneDeep } from 'lodash';

import styles from './SingleProduct.module.css';

import BANDEAU from '../../../dummy_products/top-bandeau';

const SingleProduct = _ => {
	const history = useHistory();
	const { id } = useParams();

	const product = lodash.cloneDeep(
		BANDEAU.filter(product => product.sku === id)[0]
	);

	const goBack = _ => {
		history.goBack();
	};
	return (
		<main>
			<div className={styles.topSectionContainer}>
				<span className={styles.goBack} type='button' onClick={goBack}>
					{'<'} Back
				</span>
			</div>
			<h1>{product.title}</h1>
			<div className={styles.detailsContainer}>
				<div className={styles.leftColumn}>
					<span>ID: {id}</span>
				</div>
				<div className={styles.rightColumn}></div>
			</div>
		</main>
	);
};

export default SingleProduct;
