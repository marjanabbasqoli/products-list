import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import api from "../configs/api";
import { setCookie } from "../utils/cookie";

const useRegister = (navigate) => {
	const mutationFn = (data) => api.post("auth/register", data);

	return useMutation({
		mutationFn,
		onSuccess: () => {
			toast.success("ثبت نام شما با موفقیت انجام شد");
			navigate("/login");
		},
		onError: (error) => {
			toast.error(
				error.status === 400 ? "این نام کاربری قبلا ثبت شده است" : error.message
			);
		},
	});
};

const useLogin = (navigate) => {
	const mutationFn = (data) => api.post("auth/login", data);

	return useMutation({
		mutationFn,
		onSuccess: (data) => {
			setCookie("token", data.data.token, 30);
			navigate("/");
		},
		onError: (error) =>
			toast.error(error.status === 400 ? "کاربری یافت نشد" : error.message),
	});
};

export { useRegister, useLogin };
