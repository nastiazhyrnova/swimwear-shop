import Slider from '../components/Slider/Slider';
import ProductListing from '../components/Shop/Listing/ProductListing';

const Home = _ => {
	return (
		<>
			<Slider />
			<h1 className='centered'>Featured</h1>
			<ProductListing quantity={6} featured />
		</>
	);
};

export default Home;
