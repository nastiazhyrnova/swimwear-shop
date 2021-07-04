import { useEffect } from 'react';

const useScrollToTop = _ => {
	return useEffect(_ => {
		window.scrollTo(0, 0);
	}, []);
};

export default useScrollToTop;
