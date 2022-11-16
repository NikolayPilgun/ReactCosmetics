import ReactCompareImage from "react-compare-image";
import After from "../../assets/after.png";
import Before from "../../assets/before.png";
import Shade from "../../assets/shade.png";
import styles from "./virtual.module.scss";

function Virtual() {
	return (
		<div className={styles.virtual}>
			<div className={styles.left}>
				<span>Virtual Try-On</span>
				<span>Never Buy the wrong Shade Again!</span>
				<span>Try Now!</span>
				<img src={Shade} alt="Shade" />
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<ReactCompareImage leftImage={Before} rightImage={After} />
				</div>
			</div>
		</div>
	);
}

export default Virtual;
