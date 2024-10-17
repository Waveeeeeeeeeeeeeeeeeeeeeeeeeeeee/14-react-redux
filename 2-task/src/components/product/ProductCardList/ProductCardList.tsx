import { useProducts } from "../../../hooks/useProducts";
import { IProduct } from "../../../models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";
import * as styles from "./ProductCardList.css";

export function ProductCardList() {
	const { isLoading, errorMessage, products } = useProducts();

	// Условный рендеринг
	if (isLoading) {
		return <div>Loading...</div>; // Показать индикатор загрузки
	}

	if (errorMessage) {
		return <div>Error: {errorMessage}</div>; // Показать сообщение об ошибке
	}

	if (products.length === 0) {
		return <div>No products available.</div>; // Показать сообщение, если продуктов нет
	}

	return (
		<div className={styles.productList}>
			{products.map((product: IProduct) => {
				return (
					<div key={product.id} className={styles.productCardWrapper}>
						<ProductCard {...product}></ProductCard>
					</div>
				);
			})}
		</div>
	);
}
