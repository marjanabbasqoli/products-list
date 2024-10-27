import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useRegisterHookForm = () => {
	const schema = yup.object({
		username: yup.string().required("این فیلد الزامی است"),
		password: yup
			.string()
			.required("این فیلد الزامی است")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
				"رمز عبور باید شامل حروف کوچک, بزرگ و یک کاراکتر خاص باشد"
			),
		confirmPassword: yup
			.string()
			.required("این فیلد الزامی است")
			.oneOf([yup.ref("password"), null], "رمز عبورها یکسان نیستند"),
	});

	return useForm({
		resolver: yupResolver(schema),
		// mode: "onTouched",
	});
};

const useAddProductHookForm = () => {
	const schema = yup.object({
		name: yup.string().required("این فیلد الزامی است"),
		quantity: yup
			.string()
			.matches(
				/^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/,
				"موجودی صحیح نیست"
			)
			.required("این فیلد الزامی است"),
		price: yup
			.string()
			.matches(
				/^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/,
				"قیمت صحیح نیست"
			)
			.required("این فیلد الزامی است"),
	});

	return useForm({
		resolver: yupResolver(schema),
	});
};

export { useRegisterHookForm, useAddProductHookForm };
