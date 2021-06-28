import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Transition } from 'react-transition-group/Transition';

import SizesList from '../../ProductFeatures/SizesList/SizesList';
import ColorsList from '../../ProductFeatures/ColorsList/ColorsList';
import HiddenButton from '../../../UI/Buttons/HiddenButton/HiddenButton';

import styles from './ConstructorItem.module.css';
import productImages from '../../../../assets/products/productImages';
import arrowIcon from '../../../../assets/icons/arrow.svg';
import { react } from '@babel/types';

const ConstructorItem = props => {
	const image =
		productImages[`${props.product.category}`][`${props.product.sku}`][
			`${props.filterColor ? props.filterColor : props.product.defaultColor}`
		];

	const childFactory = direction => child =>
		React.cloneElement(child, {
			classNames: {
				enter: styles[`${direction}Enter`],
				enterActive: styles[`${direction}EnterActive`],
				// enterDone: styles[`${direction}EnterDone`],
				exitDone: styles[`${direction}ExitDone`],
				exitActive: styles[`${direction}ExitActive`],
			},
		});

	return (
		<div>
			<div className={styles.productContainer}>
				<div className={styles.colors}>
					<ColorsList type='radio' />
				</div>
				<div className={styles.slider}>
					<HiddenButton
						label='Previous'
						onClick={_ =>
							props.showPrevious(props.product.category, props.product.sku)
						}>
						<img src={arrowIcon} alt='Previous' className={styles.leftArrow} />
					</HiddenButton>
					<div className={styles.imageWrapper}>
						{/* <Transition in={} timeout={500}> */}
						<TransitionGroup childFactory={childFactory(props.sliderDirection)}>
							<CSSTransition
								key={props.currentIndex}
								timeout={200}
								classNames={{
									enter: styles[`${props.sliderDirection}Enter`],
									enterActive: styles[`${props.sliderDirection}EnterActive`],
									// enterDone: styles[`${props.sliderDirection}EnterDone`],
									exitDone: styles[`${props.sliderDirection}ExitDone`],
									exitActive: styles[`${props.sliderDirection}ExitActive`],
								}}>
								<img
									src={image}
									alt={props.product.title}
									className={styles.image}
								/>
							</CSSTransition>
						</TransitionGroup>
						{/* </Transition> */}
					</div>
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
