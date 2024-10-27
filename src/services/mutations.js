import { useMutation, useQueryClient } from "@tanstack/react-query";
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
		onSuccess: (res) => {
			setCookie("token", res.data.token, 30);
			navigate("/");
		},
		onError: (error) =>
			toast.error(error.status === 400 ? "کاربری یافت نشد" : error.message),
	});
};

const useDeleteProduct = () => {
	const queryClient = useQueryClient();
	const mutationFn = (id) => api.delete(`products/${id}`);
	return useMutation({
		mutationFn,
		onSuccess: () => {
			toast.success("محصول با موفقیت حذف شد");
			queryClient.invalidateQueries({
				queryKey: ["products"],
			});
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};

const useAddProduct = () => {
	const queryClient = useQueryClient();
	const mutationFn = (data) => api.post("products", data);
	return useMutation({
		mutationFn,
		onSuccess: () => {
			toast.success("محصول با موفقیت اضافه شد");
			queryClient.invalidateQueries({
				queryKey: ["products"],
			});
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};

const useEditProduct = () => {
	const queryClient = useQueryClient();
	const mutationFn = (data) => api.put(`products/${data.id}`, data);

	return useMutation({
		mutationFn,
		onSuccess: () => {
			toast.success("محصول با موفقیت ویرایش شد");
			queryClient.invalidateQueries({
				queryKey: ["products"],
			});
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};

export {
	useRegister,
	useLogin,
	useDeleteProduct,
	useAddProduct,
	useEditProduct,
};
