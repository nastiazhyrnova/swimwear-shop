import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Switch } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Loader from './components/UI/Loader/Loader';

const Home = React.lazy(() => import('./pages/Home'));
const Shop = React.lazy(() => import('./pages/Shop'));
const SingleProduct = React.lazy(() =>
	import('./components/Shop/Single/SingleProduct')
);
const Orders = React.lazy(() => import('./pages/Orders'));
const Page404 = React.lazy(() => import('./pages/404'));
const DeliveryAndReturns = React.lazy(() =>
	import('./pages/Legal/DeliveryAndReturns')
);
const PrivacyPolicy = React.lazy(() => import('./pages/Legal/PrivacyPolicy'));
const TermsAndConditions = React.lazy(() =>
	import('./pages/Legal/TermsAndConditions')
);
const LegalAdvice = React.lazy(() => import('./pages/Legal/LegalAdvice'));
const AuthPage = React.lazy(() => import('./pages/AuthPage'));
const UserAccountPage = React.lazy(() => import('./pages/UserAccountPage'));
const OrderSummary = React.lazy(() => import('./pages/OrderSummary'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const PaymentPage = React.lazy(() => import('./pages/PaymentPage'));

const promise = loadStripe(
	'pk_test_51JAK0OJVwUyiicVaFrZinQmk4ZV5PUiYqyEZWAy9L3Lp3LjM9sq4uXrwvrcfZqMs0gn04Z8PUWwVOKS3Qm6y6ME700tWvfnhdC'
);

const Routes = () => {
	const authStore = useSelector(state => state.auth);
	const checkoutStore = useSelector(state => state.checkout);

	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/shop' exact>
					<Shop />
				</Route>
				<Route path='/shop/:category/:id' exact>
					<SingleProduct />
				</Route>
				{!!authStore.token && (
					<Route path='/user-account' exact>
						<UserAccountPage />
					</Route>
				)}
				{!authStore.token && (
					<Route path='/auth' exact>
						<AuthPage />
					</Route>
				)}
				{authStore.token && (
					<Route path='/orders' exact>
						<Orders />
					</Route>
				)}
				{!!authStore.token && checkoutStore.checkoutStarted && (
					<Route path='/order-summary' exact>
						<OrderSummary />
					</Route>
				)}
				{!!authStore.token && checkoutStore.checkoutStarted && (
					<Route path='/checkout' exact>
						<Checkout />
					</Route>
				)}
				{!!authStore.token && checkoutStore.checkoutStarted && (
					<Route path='/payment' exact>
						<Elements stripe={promise}>
							<PaymentPage />
						</Elements>
					</Route>
				)}
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
		</Suspense>
	);
};

export default Routes;
