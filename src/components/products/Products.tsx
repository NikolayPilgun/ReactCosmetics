import { useState } from "react";
import Plane from "../../assets/plane.png";
import { IProductsData, ProductsData } from "../../data/products";
import styles from "./products.module.scss";

function Products() {
	const [MenuProducts, setMenuProducts] =
		useState<IProductsData[]>(ProductsData);

	const filter = (type: string) => {
		setMenuProducts(ProductsData.filter((product) => product.type === type));
	};
	return (
		<div className={styles.products}>
			<img src={Plane} alt="Plane" />
			<h1>Our Featured Products</h1>
			<div className={styles.productContainer}>
				<ul className={styles.menu}>
					<li onClick={() => setMenuProducts(ProductsData)}>All</li>
					<li onClick={() => filter("skin care")}>Skin Care</li>
					<li onClick={() => filter("conditioner")}>Conditioner</li>
					<li onClick={() => filter("foundation")}>Foundation</li>
				</ul>

				<div className={styles.list}>
					{MenuProducts.map((product, i) => (
						<div key={i} className={styles.product}>
							<div className={styles.left_s}>
								<div className={styles.name}>
									<span>{product.name}</span>
									<span>{product.detail}</span>
								</div>
								<span>{product.price}$</span>
								<div>Show Now</div>
							</div>
							<img
								src={product.img}
								alt={product.name}
								className={styles.img_p}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Products;
