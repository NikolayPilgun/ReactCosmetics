import {
	InboxIcon,
	LinkIcon,
	LocationMarkerIcon,
	LoginIcon,
	PhoneIcon,
	UserIcon,
} from "@heroicons/react/outline";
import Logo from "../../assets/logo.png";
import styles from "./footer.module.scss";

function Footer() {
	return (
		<footer className={styles.footer}>
			<hr />
			<div className={styles.cFooter}>
				<div className={styles.logo}>
					<img src={Logo} alt="Logo" />
					<span>Cosmetic store</span>
				</div>
				<div className={styles.block}>
					<div className={styles.detail}>
						<span>Contact US</span>
						<span className={styles.pngLine}>
							<LocationMarkerIcon className={styles.icon} />
							<span>111 north avenue Orlando, FL 32801</span>
						</span>
						<span className={styles.pngLine}>
							<PhoneIcon className={styles.icon} />
							<span>352-306-4415</span>
						</span>
						<span className={styles.pngLine}>
							<InboxIcon className={styles.icon} />
							<span>support@amazon.com</span>
						</span>
					</div>
				</div>
				<div className={styles.block}>
					<div className={styles.detail}>
						<span>Account</span>
						<span className={styles.pngLine}>
							<LoginIcon className={styles.icon} />
							<span>Sign In</span>
						</span>
					</div>
				</div>
				<div className={styles.block}>
					<div className={styles.detail}>
						<span>Company</span>
						<span className={styles.pngLine}>
							<UserIcon className={styles.icon} />
							<span className={styles.iconFon}></span>
							<UserIcon className={styles.icon2} />
							<span>About us</span>
						</span>
					</div>
				</div>
				<div className={styles.block}>
					<div className={styles.detail}>
						<span>Resources</span>
						<span className={styles.pngLine}>
							<LinkIcon className={styles.icon} />
							<span>Safety Privacy & Terms</span>
						</span>
					</div>
				</div>
			</div>
			<div className={styles.copyright}>
				<span>Copyright ©2022 by Cosmetic store, Inc.</span>
				<span>All rights reserved.</span>
			</div>
		</footer>
	);
}

export default Footer;
