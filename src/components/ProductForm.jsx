import { useForm } from "react-hook-form";
import { useAddProduct, useEditProduct } from "../services/mutations";
import styles from "./ProductForm.module.scss";
import { useAddProductHookForm } from "../configs/hookForm";

function ProductForm(props) {
	const { type, setShowForm } = props;

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useAddProductHookForm();

	const { mutate: add } = useAddProduct();
	const { mutate: edit } = useEditProduct();

	const submitHandler = (form, e) => {
		e.preventDefault();
		if (type === "add") {
			add({ ...form, quantity: +form.quantity, price: +form.price });
		}
		if (type === "edit") {
			edit({
				...form,
				quantity: +form.quantity,
				price: +form.price,
				id: props.product.id,
			});
		}

		setShowForm(false);
	};

	return (
		<>
			<form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
				<label htmlFor="">نام کالا</label>
				<input
					placeholder="نام کالا"
					{...register("name")}
					defaultValue={type === "edit" ? props.product.name : null}
				/>
				<p className={styles.error}>{errors.name?.message}</p>

				<label htmlFor="">تعداد موجودی</label>
				<input
					type="number"
					placeholder="تعداد"
					{...register("quantity")}
					defaultValue={type === "edit" ? props.product.quantity : null}
				/>
				<p className={styles.error}>{errors.quantity?.message}</p>

				<label htmlFor="">قیمت</label>
				<input
					type="number"
					placeholder="قیمت"
					{...register("price")}
					defaultValue={type === "edit" ? props.product.price : null}
				/>
				<p className={styles.error}>{errors.price?.message}</p>

				<div className={styles.buttons}>
					<button type="submit" style={{ background: "#55A3F0", color: "white" }}>
						ثبت
					</button>
					<button
						onClick={() => setShowForm(false)}
						style={{ background: "#DFDFDF", color: "#282828" }}
					>
						انصراف
					</button>
				</div>
			</form>
		</>
	);
}

export default ProductForm;
