import Slider from '../components/Slider/Slider';
import ProductListing from '../components/Shop/Listing/ProductListing';

const Home = _ => {
	return (
		<>
			<Slider />
			<h1 className='centered'>Featured</h1>
			<ProductListing max={6} />
		</>
	);
};

export default Home;
