import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useLogin } from "../services/mutations";
import logo from "../assets/boto-logo.svg";

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

	const { mutate, isPending } = useLogin(useNavigate());

	return (
		<div className="theme-form">
			<div className="container">
				<img src={logo} alt="" />
				<h3>فرم ورود</h3>
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

				<Link to="/register" className="link">
					ایجاد حساب کاربری!
				</Link>
			</div>
		</div>
	);
}

export default LoginPage;
