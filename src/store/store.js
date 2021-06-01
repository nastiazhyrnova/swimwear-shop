import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loadingSlice';

const store = configureStore({
	reducer: {
		loading: loadingSlice.reducer,
	},
});

export default store;
