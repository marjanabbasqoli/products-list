import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useProducts = () => {
	const queryFn = () => api.get("products");
	return useQuery({
		queryKey: ["products"],
		queryFn,
	});
};

export { useProducts };
