import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";
import HeroImg from "../../assets/hero.png";
import styles from "./hero.module.scss";

function Hero() {
	const transition = { duration: 3, type: "spring" };
	return (
		<div className={styles.hero}>
			{/* left side */}
			<div className={styles.h_sides}>
				<span className={styles.text1}>skin protection cream</span>
				<div className={styles.text2}>
					<span>Trendy Collection</span>
					<span>
						Seedily say has suitable disposal and boy. Exercise joy man children
						rejoiced.
					</span>
				</div>
			</div>
			{/* middle side hero imge */}
			<div className={styles.wrapper}>
				{/* blue circle */}
				<motion.div
					initial={{ bottom: "2rem" }}
					whileInView={{ bottom: "0rem" }}
					className={styles.blueCircle}
					transition={transition}
				></motion.div>
				{/* hero image */}
				<motion.img
					transition={transition}
					initial={{ bottom: "-2rem" }}
					whileInView={{ bottom: "0rem" }}
					src={HeroImg}
					alt="HeroImg"
					width={600}
				/>
				{/* cart div animating */}
				<motion.div
					transition={transition}
					initial={{ right: "4%" }}
					whileInView={{ right: "2%" }}
					className={styles.cart2}
				>
					<RiShoppingBagFill />
					<div className={styles.signup}>
						<span>Best Signup Offers</span>
						<div>
							<BsArrowRight />
						</div>
					</div>
				</motion.div>
			</div>
			{/* right side */}
			<div className={styles.h_sides}>
				<div className={styles.traffic}>
					<span>1.5m</span>
					<span>Monthly Traffic</span>
				</div>
				<div className={styles.customers}>
					<span>100k</span>
					<span>Happy Customers</span>
				</div>
			</div>
		</div>
	);
}

export default Hero;
