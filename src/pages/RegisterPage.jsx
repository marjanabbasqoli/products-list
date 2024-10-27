import { Link, useNavigate } from "react-router-dom";

import { useRegister } from "../services/mutations";
import { useRegisterHookForm } from "../configs/hookForm";

import logo from "../assets/boto-logo.svg";

function RegisterPage() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useRegisterHookForm();

	const { mutate, isPending } = useRegister(useNavigate());

	const registerHandler = (form, e) => {
		e.preventDefault();
		mutate(form);
	};

	return (
		<>
			<div className="theme-form">
				<div className="container">
					<img src={logo} alt="" />
					<h3>فرم ثبت نام</h3>
					<form onSubmit={handleSubmit(registerHandler)}>
						<input placeholder="نام کاربری" {...register("username")} />
						<p>{errors.username?.message}</p>

						<input type="password" placeholder="رمز عبور" {...register("password")} />
						<p>{errors.password?.message}</p>

						<input
							type="password"
							placeholder="تکرار رمز عبور"
							{...register("confirmPassword")}
						/>
						<p>{errors.confirmPassword?.message}</p>

						<button type="submit" disabled={isPending}>
							ثبت نام
						</button>
					</form>

					<Link to="/login" className="link">
						حساب کاربری دارید؟
					</Link>
				</div>
			</div>
		</>
	);
}

export default RegisterPage;
