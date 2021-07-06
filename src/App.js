import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Loader from './components/UI/Loader/Loader';
import Notification from './components/UI/Notification/Notification';

import Home from './pages/Home';
import Shop from './pages/Shop';
import CreateYours from './pages/CreateYours';
import About from './pages/About';
import Contact from './pages/Contact';
import DeliveryAndReturns from './pages/Legal/DeliveryAndReturns';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsAndConditions from './pages/Legal/TermsAndConditions';
import LegalAdvice from './pages/Legal/LegalAdvice';
import Page404 from './pages/404';
import SingleProduct from './components/Shop/Single/SingleProduct';
import AuthPage from './pages/AuthPage';
import UserAccountPage from './pages/UserAccountPage';
import Orders from './pages/Orders';
import OrderSummary from './pages/OrderSummary';
import Checkout from './pages/Checkout';

import { setProductsAction } from './store/products/products-actions';
import { authActions } from './store/auth/authSlice';
import { autoLogoutAction } from './store/auth/auth-actions';
import { cartActions } from './store/cart/cartSlice';

const App = _ => {
	const authStore = useSelector(state => state.auth);
	const cartStore = useSelector(state => state.cart);
	const notificationStore = useSelector(state => state.notification);
	const dispatch = useDispatch();

	//set products and check if user is logged in
	useEffect(
		_ => {
			dispatch(setProductsAction());
			dispatch(authActions.checkAuth());
		},
		[dispatch]
	);

	useEffect(
		_ => {
			if (!!authStore.token) {
				dispatch(autoLogoutAction());
			}
		},
		[dispatch, authStore.token]
	);

	//retrieve cart from the local storage
	useEffect(
		_ => {
			if (localStorage.getItem('cart')) {
				dispatch(
					cartActions.setCart({
						localCart: JSON.parse(localStorage.getItem('cart')),
					})
				);
			}
		},
		[dispatch]
	);

	//update cart in the local storage everytime we change it
	useEffect(
		_ => {
			if (cartStore.length > 0) {
				localStorage.setItem('cart', JSON.stringify(cartStore));
			} else if (cartStore.length === 0) {
				localStorage.removeItem('cart');
			}
		},
		[cartStore]
	);

	const routerSettings = (
		<Switch>
			<Route path='/' exact>
				<Home />
			</Route>
			<Route path='/shop' exact>
				<Shop />
			</Route>
			<Route path='/shop/:category' exact>
				{/* TODO: add component for the category */}
				<div>Category Listing</div>
			</Route>
			<Route path='/shop/:category/:id' exact>
				<SingleProduct />
			</Route>
			<Route path='/create-yours' exact>
				<CreateYours />
			</Route>
			<Route path='/user-account' exact>
				<UserAccountPage />
			</Route>
			<Route path='/auth' exact>
				{!!authStore.token ? <Redirect to='/user-account' /> : <AuthPage />}
			</Route>
			<Route path='/orders' exact>
				{!!authStore.token ? <Orders /> : <Redirect to='/auth' />}
			</Route>
			<Route path='/order-summary' exact>
				{!!authStore.token ? <OrderSummary /> : <Redirect to='/auth' />}
			</Route>
			<Route path='/checkout' exact>
				{!!authStore.token ? <Checkout /> : <Redirect to='/auth' />}
			</Route>
			{/* <Route path='/change-password' exact>
				{!!authStore.token ? <ChangePasswordPage /> : <Redirect to='/auth' />}
			</Route> */}
			<Route path='/about' exact>
				<About />
			</Route>
			<Route path='/contact' exact>
				<Contact />
			</Route>
			<Route path='/delivery-and-returns' exact>
				<DeliveryAndReturns />
			</Route>
			<Route path='/privacy-policy' exact>
				<PrivacyPolicy />
			</Route>
			<Route path='/terms-and-conditions' exact>
				<TermsAndConditions />
			</Route>
			<Route path='/legal-advice' exact>
				<LegalAdvice />
			</Route>
			<Route path='*'>
				<Page404 />
			</Route>
		</Switch>
	);

	return (
		<Layout>
			<Loader />
			{routerSettings}
			{notificationStore.show && <Notification />}
		</Layout>
	);
};

export default App;
