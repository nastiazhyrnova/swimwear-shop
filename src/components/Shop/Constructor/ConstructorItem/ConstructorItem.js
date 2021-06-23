import SizesList from '../../ProductFeatures/SizesList/SizesList';
import ColorsList from '../../ProductFeatures/ColorsList/ColorsList';
import HiddenButton from '../../../UI/Buttons/HiddenButton/HiddenButton';

import styles from './ConstructorItem.module.css';
import productImages from '../../../../assets/products/productImages';
import arrowIcon from '../../../../assets/icons/arrow.svg';

const ConstructorItem = props => {
	const image =
		productImages[`${props.product.category}`][`${props.product.sku}`][
			`${props.filterColor ? props.filterColor : props.product.defaultColor}`
		];

	return (
		<div>
			<div className={styles.productContainer}>
				<div className={styles.colors}>
					<ColorsList />
				</div>
				<div className={styles.images}>
					<div>
						<HiddenButton label='Previous' onClick={_ => {}}>
							<img
								src={arrowIcon}
								alt='Previous'
								className={styles.leftArrow}
							/>
						</HiddenButton>
						<img src={image} alt={props.product.title} />
						<HiddenButton label='Next' onClick={_ => {}}>
							<img src={arrowIcon} alt='Next' className={styles.rightArrow} />
						</HiddenButton>
					</div>
				</div>
				<div className={styles.sizes}>
					<SizesList />
				</div>
			</div>
		</div>
	);
};

export default ConstructorItem;

// * IDEA: add drag event to the image
