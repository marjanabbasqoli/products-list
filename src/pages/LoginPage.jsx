import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../services/mutations";

const messages = {
	username: "لطفا نام کاربری را وارد نمایید",
	password: "لطفا رمز عبور را وارد نمایید",
};

function LoginPage() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const loginHandler = (form, e) => {
		e.preventDefault();
		mutate(form);
	};

	const navigate = useNavigate();
	const { mutate, isPending } = useLogin(navigate);

	return (
		<>
			<form onSubmit={handleSubmit(loginHandler)}>
				<input
					placeholder="نام کاربری"
					{...register("username", { required: true })}
				/>
				<p>{errors.username && messages.username}</p>

				<input
					type="password"
					placeholder="رمز عبور"
					{...register("password", { required: true })}
				/>
				<p>{errors.password && messages.password}</p>

				<button type="submit" disabled={isPending}>
					ورود
				</button>
			</form>
		</>
	);
}

export default LoginPage;
