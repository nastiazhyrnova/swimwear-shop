import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Import our reducer => store.reducer
import store from './store/store'; // to access rest of reducers

const render = (
	ui,
	{
		initialState,
		store = createStore(store.reducer, initialState),
		...renderOptions
	} = {}
) => {
	const Wrapper = ({ children }) => {
		return <Provider store={store}>{children}</Provider>;
	};

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
