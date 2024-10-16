import { useEffect, useState } from "react";

export function useFetch(url: string) {
	const [data, setData] = useState([]);
	useEffect(() => {
		const req = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
				setData(data);

				return data;
			} catch (error) {
				console.error(error);
			}
		};

		req();
	}, [url]);

	return data;
}
