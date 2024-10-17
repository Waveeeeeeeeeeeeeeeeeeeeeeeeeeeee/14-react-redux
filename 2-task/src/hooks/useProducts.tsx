import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import { IProductList } from "../models/ProductListModel";

export function useProducts() {
	const [products, setProducts] = useState<IProductList>([]);
	const { isLoading, errorMessage, data } = useFetch<IProductList>(
		"https://fakestoreapi.com/products",
	);

	useEffect(() => {
		if (!isLoading && !errorMessage && data) {
			setProducts(data);
		}
	}, [isLoading, errorMessage, data]);

	return {
		isLoading,
		errorMessage,
		products,
	};
}
