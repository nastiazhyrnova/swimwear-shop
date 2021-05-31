import { useHistory } from 'react-router-dom';

import Slider from '../components/Slider/Slider';
import ProductListing from '../components/Shop/Listing/ProductListing';
import Button from '../components/UI/Buttons/Button/Button';

const Home = _ => {
	const history = useHistory();
	const goToShop = _ => {
		history.push('/shop');
	};

	return (
		<>
			<Slider />
			<h1 className='centered'>Featured Models</h1>
			<ProductListing max={6} featured />
			<Button inversed onClick={goToShop}>
				See all products
			</Button>
		</>
	);
};

export default Home;
