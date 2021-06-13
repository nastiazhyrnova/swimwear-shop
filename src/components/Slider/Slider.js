import { useHistory } from 'react-router-dom';

import styles from './Slider.module.css';
import homePhoto from '../../assets/home-photo.jpg';

import Button from '../UI/Buttons/Button/Button';

const Slider = _ => {
	const sliderTitleWhite = `${styles.sliderTitle} ${styles.white}`;
	const sliderSubtitleWhite = `${styles.sliderSubtitle} ${styles.white}`;

	const history = useHistory();
	const openCreateYours = _ => {
		history.push('/create-yours');
	};

	return (
		<section className={styles.slider}>
			<div className={styles.sliderContainer}>
				<div className={styles.leftColumn}>
					<div className={styles.titleContainer}>
						<span className={styles.sliderTitle}>
							Create a CUSTOM bikini set
						</span>
						<span className={styles.sliderSubtitle}>
							hand made especially for <strong>you</strong>
						</span>
					</div>
					<Button additionalClass={styles.cta} onClick={openCreateYours}>
						Create Yours
					</Button>
				</div>
				<div className={styles.rightColumn}>
					<img
						className={styles.homePhoto}
						src={homePhoto}
						alt='Girl in a bikini lying at the beach'
					/>

					{/* <span className={sliderTitleWhite}>Create a CUSTOM bikini set</span>
					<span className={sliderSubtitleWhite}>
						hand made especially for <strong>you</strong>
					</span> */}
				</div>
			</div>
		</section>
	);
};

export default Slider;
