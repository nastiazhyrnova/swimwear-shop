import bandeauImage from '../assets/products/bras/bandeau/bandeau';

const BANDEAU = [
	{
		sku: '1BAND',
		title: 'Bandeau bikini top',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		category: 'tops',
		price: 38,
		colorSku: 'bla',
		image: bandeauImage.black,
		featured: true,
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
];

export default BANDEAU;
