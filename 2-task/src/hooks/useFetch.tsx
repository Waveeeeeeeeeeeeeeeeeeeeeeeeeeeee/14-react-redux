import { useEffect, useState } from "react";
import { IApiStatus } from "../types/ApiStatus.interface";

export function useFetch<T>(url: string) {
	const [data, setData] = useState<T>({} as T);
	const [reqState, setState] = useState<IApiStatus>({
		isLoading: false,
		errorMessage: "Something went wrong",
	});
	useEffect(() => {
		const req = async () => {
			setState({ isLoading: true, errorMessage: "" });
			try {
				const res = await fetch(url);
				const data: T = await res.json();
				setState({
					isLoading: false,
					errorMessage: "",
				});
				setData(data);

				return data;
			} catch (error: unknown) {
				if (error instanceof Error) {
					setState({
						isLoading: false,
						errorMessage: error.message,
					});
				} else {
					setState({
						isLoading: false,
						errorMessage: "Unknown error",
					});
				}
			}
		};

		req();
	}, [url]);

	return { data, ...reqState };
}
