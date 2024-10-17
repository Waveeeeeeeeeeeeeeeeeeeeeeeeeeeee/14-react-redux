import { IProduct } from "../../../models/ProductModel";
import * as styles from "./ProductCard.css"; // импорт стилей

export function ProductCard({ title, price, description, image }: IProduct) {
	return (
		<div className={styles.card}>
			<img src={image} alt={title} className={styles.image} />
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
			<p className={styles.price}>${price}</p>
			<button className={styles.button}>Add to Cart</button>
		</div>
	);
}
