import { useEffect } from 'react';

const useScrollToTop = () => {
	return useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
};

export default useScrollToTop;
