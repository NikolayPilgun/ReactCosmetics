import { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import Logo from "../../assets/logo.png";
import styles from "./header.module.scss";

function Header() {
	const [ShowMenu, setShowMenu] = useState(true);
	const toggleMenu = () => {
		setShowMenu((ShowMenu) => !ShowMenu);
	};
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={Logo} alt="Logo" />
				<span>Cosmetic store</span>
			</div>
			<div className={styles.right}>
				<div className={styles.bars} onClick={toggleMenu}>
					<GoThreeBars />
				</div>

				<ul
					className={styles.menu}
					style={{ display: ShowMenu ? "inherit" : "none" }}
				>
					<li>Collections</li>
					<li>Brands</li>
					<li>New</li>
					<li>Sales</li>
					<li>ENG</li>
				</ul>

				<input type="text" className={styles.search} placeholder="Search" />
				<CgShoppingBag className={styles.cart} />
			</div>
		</header>
	);
}

export default Header;
