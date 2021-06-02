import styles from './SingleProductCard.module.css';

import Button from '../../../UI/Buttons/Button/Button';
import ColorsList from '../../ProductFeatures/ColorsList/ColorsList';
import SizesList from '../../ProductFeatures/SizesList/SizesList';
import PriceTag from '../../ProductFeatures/PriceTag/PriceTag';
import Label from '../../ProductFeatures/Label/Label';
import React from 'react';

const SingleProductCard = props => {
	return (
		<div className={styles.detailsContainer}>
			<div className={styles.leftColumn}>
				<div className={styles.imgContainer}>
					<Label product={props.product} />
					<img
						className={styles.image}
						src={props.currentProductColorVariation.image}
						alt={props.product.title}
					/>
				</div>
			</div>
			<div className={styles.rightColumn}>
				<h1>{props.product.title}</h1>
				<p>
					Ref.: {props.product.sku}
					{props.state.color}
				</p>
				<h2 className={styles.price}>
					<PriceTag product={props.product} />
				</h2>
				<h4>Colors</h4>
				<ColorsList
					selectedColor={props.state.color}
					changeSelectedColor={color =>
						props.dispatch({ type: 'SET_COLOR', color: color })
					}
				/>
				<h4>Sizes</h4>
				<SizesList
					selectedSize={props.state.size}
					changeSelectedSize={size =>
						props.dispatch({ type: 'SET_SIZE', size: size })
					}
				/>
				<p>{props.product.description}</p>
				<div className={styles.addToCartContainer}>
					<div className={styles.counterContainer}>
						<button
							onClick={_ => props.dispatch({ type: 'REMOVE_ITEM' })}
							disabled={props.state.quantity === 1 ? true : false}>
							-
						</button>
						<span>{props.state.quantity}</span>
						<button onClick={_ => props.dispatch({ type: 'ADD_ITEM' })}>
							+
						</button>
					</div>
					<Button
						inversed
						additionalClass={styles.addToCartButton}
						disabled={!props.state.size}
						onClick={props.addToCart}>
						Add to cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SingleProductCard;
