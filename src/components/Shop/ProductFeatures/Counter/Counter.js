import styles from './Counter.module.css';

const Counter = props => {
	return (
		<div className={styles.counterContainer}>
			<button
				onClick={props.onRemove}
				disabled={props.currentQuantity === 1 ? true : false}>
				-
			</button>
			<span>{props.currentQuantity}</span>
			<button onClick={props.onAdd}>+</button>
		</div>
	);
};

export default Counter;
