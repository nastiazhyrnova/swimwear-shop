import colorSwatches from '../assets/products/color-swatches/color-swatches';

const ATTRIBUTES = [
	{
		name: 'Color',
		options: [
			{
				sku: 'bla',
				value: 'Black',
				swatchURL: colorSwatches.black,
			},
			{
				sku: 'blac',
				value: 'Black circles',
				swatchURL: colorSwatches.blackCircles,
			},
			{
				sku: 'blaf',
				value: 'Black flowers',
				swatchURL: colorSwatches.blackFlower,
			},
			{
				sku: 'blu',
				value: 'Blue',
				swatchURL: colorSwatches.blue,
			},
			{
				sku: 'bluo',
				value: 'Blue Ocean',
				swatchURL: colorSwatches.blueOcean,
			},
			{
				sku: 'oraw',
				value: 'Orange Watercolor',
				swatchURL: colorSwatches.orangeWatercolor,
			},
			{
				sku: 'red',
				value: 'Red',
				swatchURL: colorSwatches.red,
			},
			{
				sku: 'tur',
				value: 'Turquoise',
				swatchURL: colorSwatches.turquoise,
			},
			{
				sku: 'turs',
				value: 'Turquoise Stripes',
				swatchURL: colorSwatches.turquoiseStripe,
			},
			{
				sku: 'whi',
				value: 'White',
				swatchURL: colorSwatches.white,
			},
			{
				sku: 'whid',
				value: 'White Dots',
				swatchURL: colorSwatches.whiteDots,
			},
			{
				sku: 'whios',
				value: 'White Orange Splash',
				swatchURL: colorSwatches.whiteOrangeSplash,
			},
			{
				sku: 'yel',
				value: 'Yellow',
				swatchURL: colorSwatches.yellow,
			},
		],
	},
	{
		name: 'Size',
		options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	},
];

export default ATTRIBUTES;
