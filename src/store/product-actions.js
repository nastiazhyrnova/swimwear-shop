import { loadingActions } from './loadingSlice';
import { productsActions } from './productsSlice';

export const setProductsAction = _ => {
	return async dispatch => {
		const fetchData = async category => {
			const response = await fetch(
				`https://bikini-shop-25276-default-rtdb.europe-west1.firebasedatabase.app/${category}.json`
			);
			if (!response.ok) {
				throw new Error(`Couldn't fetch ${category}`);
			}
			const data = await response.json();
			return data;
		};

		try {
			dispatch(loadingActions.startLoading());
			const productsData = await fetchData('products');
			const productsArray = Object.values(productsData);
			dispatch(
				productsActions.setProducts({
					products: productsArray,
				})
			);
			const attributesData = await fetchData('attributes');
			dispatch(
				productsActions.setColors({
					color: Object.values(attributesData.color),
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
