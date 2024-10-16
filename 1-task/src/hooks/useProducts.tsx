import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import { IProduct } from "../models/ProductModel";

export function useProducts() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const fetchedData: IProduct[] = useFetch(
		"https://fakestoreapi.com/products",
	);

	useEffect(() => {
		if (fetchedData.length > 0) {
			setProducts(fetchedData);
		}
	}, [fetchedData]);

	console.log(products);
	return products;
}
