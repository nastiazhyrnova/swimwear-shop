const DUMMY_PRODUCTS = [
	{
		sku: 'bandeau',
		category: 'tops',
		title: 'Bandeau bikini top',
		price: 38,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: false,
		bestseller: true,
		stock: 100,
		sale: {
			onSale: true,
			discount: 22,
		},
	},
	{
		sku: 'cups',
		category: 'tops',
		title: 'Classic bikini top',
		price: 35,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: false,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
	},
	{
		sku: 'ring',
		category: 'tops',
		title: 'Top with wooden ring',
		price: 42,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: true,
		bestseller: true,
		stock: 100,
		sale: {
			onSale: true,
			discount: 10,
		},
	},
	{
		sku: 'top',
		category: 'tops',
		title: 'Crop top with a mesh',
		price: 43,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: true,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
	},
	{
		sku: 'triangle',
		category: 'tops',
		title: 'Classic triangle top',
		price: 33,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: false,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
	},
	{
		sku: 'vShape',
		category: 'tops',
		title: 'Modern v-shape top',
		price: 39,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: false,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
	},
	{
		sku: 'classic',
		category: 'bottoms',
		title: 'Classic bikini bottom',
		price: 25,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: false,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
	},
	{
		sku: 'high',
		category: 'bottoms',
		title: 'High bikini bottom',
		price: 28,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: true,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: true,
			discount: 10,
		},
	},
	{
		sku: 'ribbons',
		category: 'bottoms',
		title: 'Bikini bottom with ribbons',
		price: 24,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: false,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
	},
	{
		sku: 'sideRubbers',
		category: 'bottoms',
		title: 'Bikini bottom with triple side connection',
		price: 26,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: true,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
	},
	{
		sku: 'slimRibbons',
		category: 'bottoms',
		title: 'Classic bikini with slim ribbons on the sides',
		price: 24,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: true,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
	},
	{
		sku: 'thong',
		category: 'bottoms',
		title: 'Thong bikini bottom',
		price: 23,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique nibh erat, in lacinia erat lacinia quis. Nam vitae lobortis urna, non tristique quam. Vivamus lectus est, consequat vel gravida at, tempor at massa. Suspendisse a scelerisque odio. Praesent ut felis quis ipsum vestibulum congue congue dictum erat. Mauris blandit elit vitae odio placerat sagittis. Sed feugiat mattis justo ac bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
		defaultColor: 'turquoise',
		featured: true,
		bestseller: false,
		stock: 100,
		sale: {
			onSale: false,
			discount: 0,
		},
	},
];

export default DUMMY_PRODUCTS;
