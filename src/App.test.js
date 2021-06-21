import React from 'react';
import { render, screen } from './test-utils';

import App from './App';

describe('App', _ => {
	test('renders App component', _ => {
		render(<App />);

		screen.debug();
	});
});
