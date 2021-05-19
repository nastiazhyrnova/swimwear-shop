import Slider from '../components/Slider/Slider';
import ProductListing from '../components/Shop/Listing/ProductListing';
import Button from '../components/UI/Buttons/Button/Button';

const Home = _ => {
	return (
		<>
			<Slider />
			<h1 className='centered'>Featured Models</h1>
			<ProductListing max={6} />
			<Button inversed onClick={_ => {}}>
				See all products
			</Button>
		</>
	);
};

export default Home;
