import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useHookForm } from "../configs/hookForm";
import { useRegister } from "../services/mutations";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useHookForm();

	const {mutate, isPending } = useRegister(useNavigate());

	const registerHandler = (form, e) => {
		e.preventDefault();
		mutate(form);
	};

	return (
		<>
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
		</>
	);
}

export default RegisterPage;
