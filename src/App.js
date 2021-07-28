import React from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Loader from './components/UI/Loader/Loader';
import Routes from './Routes';
import Notification from './components/UI/Notification/Notification';

import { setProductsAction } from './store/products/products-actions';
import { authActions } from './store/auth/authSlice';
import { autoLogoutAction } from './store/auth/auth-actions';
import { cartActions } from './store/cart/cartSlice';

const App = () => {
	const authStore = useSelector(state => state.auth);
	const cartStore = useSelector(state => state.cart);
	const notificationStore = useSelector(state => state.notification);
	const dispatch = useDispatch();
	//set products and check if user is logged in
	useEffect(() => {
		dispatch(setProductsAction());
		dispatch(authActions.checkAuth());
	}, [dispatch]);

	useEffect(() => {
		if (!!authStore.token) {
			dispatch(autoLogoutAction());
		}
	}, [dispatch, authStore.token]);

	//retrieve cart from the local storage
	useEffect(() => {
		if (localStorage.getItem('cart')) {
			dispatch(
				cartActions.setCart({
					localCart: JSON.parse(localStorage.getItem('cart')),
				})
			);
		}
	}, [dispatch]);

	//update cart in the local storage everytime we change it
	useEffect(() => {
		if (cartStore.length > 0) {
			localStorage.setItem('cart', JSON.stringify(cartStore));
		} else if (cartStore.length === 0) {
			localStorage.removeItem('cart');
		}
	}, [cartStore]);

	useEffect(() => {}, []);

	return (
		<Layout>
			<Loader />
			<Routes />
			{notificationStore.show && <Notification />}
		</Layout>
	);
};

export default App;
