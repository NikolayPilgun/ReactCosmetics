import { CgShoppingBag } from "react-icons/cg";
import Logo from "../../assets/logo.png";
import styles from "./header.module.scss";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={Logo} alt="Logo" />
				<span>Cosmetic store</span>
			</div>
			<div className={styles.right}>
				<nav className={styles.menu}>
					<ul className={styles.menu}>
						<li>Collections</li>
						<li>Brands</li>
						<li>New</li>
						<li>Sales</li>
						<li>ENG</li>
					</ul>
				</nav>
				<input type="text" className={styles.search} placeholder="Search" />
				<CgShoppingBag className={styles.cart} />
			</div>
		</header>
	);
}

export default Header;
