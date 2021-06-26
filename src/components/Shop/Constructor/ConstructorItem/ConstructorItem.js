import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
					<ColorsList type='radio' />
				</div>
				<div className={styles.images}>
					<HiddenButton
						label='Previous'
						onClick={_ =>
							props.showPrevious(props.product.category, props.product.sku)
						}>
						<img src={arrowIcon} alt='Previous' className={styles.leftArrow} />
					</HiddenButton>
					<TransitionGroup>
						<CSSTransition
							key={props.currentIndex}
							timeout={1000}
							classNames={{
								enter: styles.slideRightEnter,
								enterActive: styles.slideRightEnterActive,
								enterDone: styles.slideRightEnterDone,
								exitActive: styles.slideRightExitActive,
								exitDone: styles.slideRightExit,
							}}>
							<img
								src={image}
								alt={props.product.title}
								className={styles.image}
							/>
						</CSSTransition>
					</TransitionGroup>
					<HiddenButton
						label='Next'
						onClick={_ =>
							props.showNext(props.product.category, props.product.sku)
						}>
						<img src={arrowIcon} alt='Next' className={styles.rightArrow} />
					</HiddenButton>
				</div>
				<div className={styles.sizes}>
					<SizesList type='radio' />
				</div>
			</div>
		</div>
	);
};

ConstructorItem.propTypes = {
	product: PropTypes.object.isRequired,
	showPrevious: PropTypes.func,
	showNext: PropTypes.func,
	currentIndex: PropTypes.number,
};

export default ConstructorItem;

// * IDEA: add drag event to the image
