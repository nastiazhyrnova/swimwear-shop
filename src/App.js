import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';

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

const App = props => {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/shop' exact>
					<Shop />
				</Route>
				<Route path='/create-yours' exact>
					<CreateYours />
				</Route>
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
				<Route path=' *'>
					<Page404 />
				</Route>
			</Switch>
		</Layout>
	);
};

export default App;
