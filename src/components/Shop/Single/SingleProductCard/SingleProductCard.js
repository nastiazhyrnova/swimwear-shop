import Button from '../../../UI/Buttons/Button/Button';
import ColorsList from '../../ProductFeatures/ColorsList/ColorsList';
import SizesList from '../../ProductFeatures/SizesList/SizesList';
import PriceTag from '../../ProductFeatures/PriceTag/PriceTag';
import Label from '../../ProductFeatures/Label/Label';
import Counter from '../../ProductFeatures/Counter/Counter';

import styles from './SingleProductCard.module.css';
import productImages from '../../../../assets/products/productImages';

const SingleProductCard = props => {
	let output = <h1>No product data</h1>;

	if (props.product) {
		const productImage =
			productImages[`${props.product.category}`][`${props.product.sku}`][
				`${props.state.color}`
			];

		output = (
			<article className={styles.detailsContainer}>
				<div className={styles.leftColumn}>
					<div className={styles.imgContainer}>
						<Label product={props.product} />
						<img
							className={styles.image}
							src={productImage}
							alt={props.product.title}
						/>
					</div>
				</div>
				<div className={styles.rightColumn}>
					<h1>{props.product.title}</h1>
					<p>Ref.: {props.product.sku}</p>
					<h2 className={styles.price}>
						<PriceTag product={props.product} />
					</h2>
					<h4>Colors</h4>
					<ColorsList
						type='radio'
						selectedColor={props.state.color}
						changeSelectedColor={color =>
							props.dispatchLocalState({ type: 'SET_COLOR', color: color })
						}
					/>
					<h4>Sizes</h4>
					<SizesList
						type='radio'
						selectedSize={props.state.size}
						changeSelectedSize={size =>
							props.dispatchLocalState({ type: 'SET_SIZE', size: size })
						}
					/>
					<p>{props.product.description}</p>
					<div className={styles.addToCartContainer}>
						<Counter
							onAdd={() => props.dispatchLocalState({ type: 'ADD_ITEM' })}
							onRemove={() => props.dispatchLocalState({ type: 'REMOVE_ITEM' })}
							currentQuantity={props.state.quantity}
						/>
						<span
							className={styles.buttonWrapperToolip}
							title={!props.state.size ? 'Please choose size' : 'Add to cart'}>
							<Button
								inversed
								additionalClass={styles.addToCartButton}
								disabled={!props.state.size}
								onClick={props.addToCart}>
								Add to cart
							</Button>
						</span>
					</div>
				</div>
			</article>
		);
	}

	return <>{output}</>;
};

export default SingleProductCard;
