import { loadingActions } from './loadingSlice';
import { productsActions } from './productsSlice';

export const setProductsAction = _ => {
	return async dispatch => {
		const fetchData = async _ => {
			const response = await fetch(
				'https://bikini-shop-25276-default-rtdb.europe-west1.firebasedatabase.app/products.json'
			);
			if (!response.ok) {
				throw new Error("Couldn't fetch products");
			}
			const data = await response.json();
			return data;
		};

		try {
			dispatch(loadingActions.startLoading());
			const productsData = await fetchData();
			dispatch(
				productsActions.setProducts({
					products: Object.values(productsData),
				})
			);
			dispatch(loadingActions.stopLoading());
		} catch (err) {
			dispatch(loadingActions.stopLoading());
			throw new Error(err);
		}
	};
};
