import { IProductList } from "../../../models/ProductListModel";
import { useProducts } from "../../../hooks/useProducts";
import { IProduct } from "../../../models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";
import * as styles from "./ProductCardList.css"; // Импорт стилей

export function ProductCardList() {
	const products: IProductList = useProducts();
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
