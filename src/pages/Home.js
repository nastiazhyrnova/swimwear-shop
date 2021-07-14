import { useHistory } from 'react-router-dom';
import useScrollToTop from '../hooks/use-scroll-to-top';

import Slider from '../components/Slider/Slider';
import ProductListing from '../components/Shop/Listing/ProductListing';
import Button from '../components/UI/Buttons/Button/Button';
import Constructor from '../components/Shop/Constructor/Constructor';

const Home = _ => {
	useScrollToTop();
	const history = useHistory();
	const goToShop = _ => {
		history.push('/shop');
	};

	return (
		<>
			{/* <Slider />
			<h1 className='centered'>Featured Models</h1>
			<ProductListing max={6} featured />
			<Button inversed onClick={goToShop}>
				See all products
			</Button> */}
			<h1>Create your swimwear combination</h1>
			<Constructor />
		</>
	);
};

export default Home;
