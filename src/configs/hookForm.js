import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useHookForm = () => {
	const schema = yup.object({
		username: yup.string().required("این فیلد الزامی است"),
		password: yup
			.string()
			.required("این فیلد الزامی است"),
			// .matches(
			// 	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			// 	"رمز عبور باید شامل حروف کوچک, بزرگ و یک کاراکتر خاص باشد"
			// )
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

export { useHookForm };
