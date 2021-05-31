import bandeauImage from '../assets/products/bras/bandeau/bandeau';
import cupsImage from '../assets/products/bras/cups/cups';
import ringImage from '../assets/products/bras/ring/ring';
import topImage from '../assets/products/bras/top/top';
import triangleImage from '../assets/products/bras/triangle/triangle';
import vShapeImage from '../assets/products/bras/v-shape/v-shape';
import classicBottomImage from '../assets/products/panties/classic/classic';
import highBottomImage from '../assets/products/panties/high/high';
import ribbonsBottomImage from '../assets/products/panties/ribbons/ribbons';
import sideRubbersBottomImage from '../assets/products/panties/side-rubbers/side-rubbers';
import slimRibbonsBottomImage from '../assets/products/panties/slim-ribbons/slim-ribbons';
import thongBottomImage from '../assets/products/panties/thong/thong';

const DUMMY_PRODUCTS = [
	{
		sku: '1band',
		category: 'tops',
		title: 'Bandeau bikini top',
		price: 38,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: bandeauImage.turquoise,
		featured: false,
		bestseller: true,
		stock: 100,
		sale: {
			onSale: true,
			discount: 22,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: bandeauImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: bandeauImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: bandeauImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: bandeauImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: bandeauImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: bandeauImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: bandeauImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: bandeauImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: bandeauImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: bandeauImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: bandeauImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: bandeauImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: bandeauImage.yellow,
				},
			],
		},
	},
	{
		sku: '2cups',
		category: 'tops',
		title: 'Classic bikini top',
		price: 35,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: cupsImage.turquoise,
		featured: false,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: cupsImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: cupsImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: cupsImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: cupsImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: cupsImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: cupsImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: cupsImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: cupsImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: cupsImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: cupsImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: cupsImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: cupsImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: cupsImage.yellow,
				},
			],
		},
	},
	{
		sku: '3ring',
		category: 'tops',
		title: 'Top with wooden ring',
		price: 42,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: ringImage.turquoise,
		featured: true,
		bestseller: true,
		stock: 100,
		sale: {
			onSale: true,
			discount: 10,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: ringImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: ringImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: ringImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: ringImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: ringImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: ringImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: ringImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: ringImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: ringImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: ringImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: ringImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: ringImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: ringImage.yellow,
				},
			],
		},
	},
	{
		sku: '4top',
		category: 'tops',
		title: 'Crop top with a mesh',
		price: 43,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: topImage.turquoise,
		featured: true,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: topImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: topImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: topImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: topImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: topImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: topImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: topImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: topImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: topImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: topImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: topImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: topImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: topImage.yellow,
				},
			],
		},
	},
	{
		sku: '5triangle',
		category: 'tops',
		title: 'Classic triangle top',
		price: 33,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: triangleImage.turquoise,
		featured: false,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: triangleImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: triangleImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: triangleImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: triangleImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: triangleImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: triangleImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: triangleImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: triangleImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: triangleImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: triangleImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: triangleImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: triangleImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: triangleImage.yellow,
				},
			],
		},
	},
	{
		sku: '6vshape',
		category: 'tops',
		title: 'Modern v-shape top',
		price: 39,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: vShapeImage.turquoise,
		featured: false,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: vShapeImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: vShapeImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: vShapeImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: vShapeImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: vShapeImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: vShapeImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: vShapeImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: vShapeImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: vShapeImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: vShapeImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: vShapeImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: vShapeImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: vShapeImage.yellow,
				},
			],
		},
	},
	{
		sku: '7classicb',
		category: 'bottoms',
		title: 'Classic bikini bottom',
		price: 25,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: classicBottomImage.turquoise,
		featured: false,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: classicBottomImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: classicBottomImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: classicBottomImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: classicBottomImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: classicBottomImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: classicBottomImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: classicBottomImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: classicBottomImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: classicBottomImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: classicBottomImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: classicBottomImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: classicBottomImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: classicBottomImage.yellow,
				},
			],
		},
	},
	{
		sku: '8highb',
		category: 'bottoms',
		title: 'High bikini bottom',
		price: 28,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: highBottomImage.turquoise,
		featured: true,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: true,
			discount: 10,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: highBottomImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: highBottomImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: highBottomImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: highBottomImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: highBottomImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: highBottomImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: highBottomImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: highBottomImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: highBottomImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: highBottomImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: highBottomImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: highBottomImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: highBottomImage.yellow,
				},
			],
		},
	},
	{
		sku: '9ribbonsb',
		category: 'bottoms',
		title: 'Bikini bottom with ribbons',
		price: 24,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: ribbonsBottomImage.turquoise,
		featured: false,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: ribbonsBottomImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: ribbonsBottomImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: ribbonsBottomImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: ribbonsBottomImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: ribbonsBottomImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: ribbonsBottomImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: ribbonsBottomImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: ribbonsBottomImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: ribbonsBottomImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: ribbonsBottomImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: ribbonsBottomImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: ribbonsBottomImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: ribbonsBottomImage.yellow,
				},
			],
		},
	},
	{
		sku: '10siderubb',
		category: 'bottoms',
		title: 'Bikini bottom with triple side connection',
		price: 26,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: sideRubbersBottomImage.turquoise,
		featured: true,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: sideRubbersBottomImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: sideRubbersBottomImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: sideRubbersBottomImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: sideRubbersBottomImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: sideRubbersBottomImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: sideRubbersBottomImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: sideRubbersBottomImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: sideRubbersBottomImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: sideRubbersBottomImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: sideRubbersBottomImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: sideRubbersBottomImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: sideRubbersBottomImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: sideRubbersBottomImage.yellow,
				},
			],
		},
	},
	{
		sku: '11slimribb',
		category: 'bottoms',
		title: 'Classic bikini with slim ribbons on the sides',
		price: 24,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: slimRibbonsBottomImage.turquoise,
		featured: true,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: slimRibbonsBottomImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: slimRibbonsBottomImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: slimRibbonsBottomImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: slimRibbonsBottomImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: slimRibbonsBottomImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: slimRibbonsBottomImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: slimRibbonsBottomImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: slimRibbonsBottomImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: slimRibbonsBottomImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: slimRibbonsBottomImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: slimRibbonsBottomImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: slimRibbonsBottomImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: slimRibbonsBottomImage.yellow,
				},
			],
		},
	},
	{
		sku: '12thongb',
		category: 'bottoms',
		title: 'Thong bikini bottom',
		price: 23,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'tur',
		defaultImage: thongBottomImage.turquoise,
		featured: true,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
		options: {
			colors: [
				{
					sku: 'bla',
					value: 'Black',
					image: thongBottomImage.black,
				},
				{
					sku: 'blac',
					value: 'Black circles',
					image: thongBottomImage.blackCircles,
				},
				{
					sku: 'blaf',
					value: 'Black flowers',
					image: thongBottomImage.blackFlower,
				},
				{
					sku: 'blu',
					value: 'Blue',
					image: thongBottomImage.blue,
				},
				{
					sku: 'bluo',
					value: 'Blue Ocean',
					image: thongBottomImage.blueOcean,
				},
				{
					sku: 'oraw',
					value: 'Orange Watercolor',
					image: thongBottomImage.orangeWatercolor,
				},
				{
					sku: 'red',
					value: 'Red',
					image: thongBottomImage.red,
				},
				{
					sku: 'tur',
					value: 'Turquoise',
					image: thongBottomImage.turquoise,
				},
				{
					sku: 'turs',
					value: 'Turquoise Stripes',
					image: thongBottomImage.turquoiseStripe,
				},
				{
					sku: 'whi',
					value: 'White',
					image: thongBottomImage.white,
				},
				{
					sku: 'whid',
					value: 'White Dots',
					image: thongBottomImage.whiteDots,
				},
				{
					sku: 'whios',
					value: 'White Orange Splash',
					image: thongBottomImage.whiteOrangeSplash,
				},
				{
					sku: 'yel',
					value: 'Yellow',
					image: thongBottomImage.yellow,
				},
			],
		},
	},
];

export default DUMMY_PRODUCTS;
