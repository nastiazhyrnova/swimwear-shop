import { loadingActions } from '../loading/loadingSlice';
import { productsActions } from './productsSlice';

import getRandomArrayItem from '../../utilities/getRandomArrayItem';
import arrayShuffle from 'array-shuffle';

export const setProductsAction = _ => {
	return async dispatch => {
		const fetchData = async category => {
			const response = await fetch(
				`https://bikini-shop-25276-default-rtdb.europe-west1.firebasedatabase.app/${category}.json`
			);
			if (!response.ok) {
				throw new Error(`Couldn't fetch ${category}`);
			} else {
				const data = await response.json();
				return data;
			}
		};

		try {
			dispatch(loadingActions.startLoading());
			const productsData = await fetchData('products');
			const productsArray = Object.values(productsData);
			const attributesData = await fetchData('attributes');
			const colorsArray = Object.values(attributesData.color);
			//set random default colors
			productsArray.forEach(product => {
				product.defaultColor = getRandomArrayItem(colorsArray).code;
			});
			dispatch(
				productsActions.setProducts({
					products: arrayShuffle(productsArray),
				})
			);
			dispatch(
				productsActions.setColors({
					color: colorsArray,
				})
			);
			dispatch(
				productsActions.setSizes({
					size: Object.values(attributesData.size),
				})
			);
			dispatch(loadingActions.stopLoading());
		} catch (err) {
			dispatch(loadingActions.stopLoading());
			console.log(err);
		}
	};
};
