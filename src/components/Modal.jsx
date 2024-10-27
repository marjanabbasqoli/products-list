import ProductForm from "./ProductForm";
import styles from "./Modal.module.scss";
import close from "../assets/close.svg";

function Modal(props) {
	const { showConfirm, showForm, confirmHandler, setShowForm, type } = props;

	return (
		<div
			className={`${styles.modal} ${showConfirm || showForm ? styles.show : null}`}
		>
			{showConfirm && (
				<div className={styles.whiteBox}>
					<img src={close} alt="" className={styles.close} />
					<p className={styles.title}>آیا از حذف این محصول مطمئنید؟</p>
					<div className={styles.buttons}>
						<button
							onClick={() => confirmHandler(true)}
							style={{ background: "#F43F5E", color: "white" }}
						>
							حذف
						</button>
						<button
							onClick={() => confirmHandler(false)}
							style={{ background: "#DFDFDF", color: "#282828CC" }}
						>
							لغو
						</button>
					</div>
				</div>
			)}

			{showForm && (
				<div className={styles.whiteBox}>
					<ProductForm
						type={type}
						setShowForm={setShowForm}
						product={props.product}
					/>
				</div>
			)}
		</div>
	);
}

export default Modal;
