import Header from './Header/Header';
import Footer from './Footer/Footer';

import styles from './Layout.module.css';

const Layout = props => {
	return (
		<div>
			<Header />
			<div className={styles.content}>{props.children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
