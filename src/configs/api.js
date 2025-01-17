import axios from "axios";
import { getCookie } from "../utils/cookie";
// import { getCookie } from "utils/cookie";
// import { getNewTokens } from "services/token";
// import { setCookie } from "utils/cookie";

const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	(request) => {
		const token = getCookie("token");
		if (token) {
			request.headers["Authorization"] = `bearer ${token}`;
		}
		return request;
	},
	(error) => {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => {
		return response;
	}
	// async (error) => {
	// 	// const originalRequest = error.config;
	// 	// if (error.response.status === 403) {
	// 	// 	originalRequest._retry = true;
	// 	// 	const res = await getNewTokens();
	// 	// 	if (!res?.response) return;
	// 	// 	setCookie(res.response.data);
	// 	// 	return api(originalRequest);
	// 	// }
	// 	console.log(error);
	// }
);

export default api;
