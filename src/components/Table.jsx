import { useState } from "react";
import { useDeleteProduct } from "../services/mutations";
import Modal from "./Modal";
import ProductForm from "./ProductForm";
import styles from "./Table.module.scss";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

function Table({ displayed }) {
	// const { id, name, quantity, price } = product;
	const [showForm, setShowForm] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const { mutate } = useDeleteProduct();
	const [data, setData] = useState(null);

	const confirmHandler = (confirm) => {
		setShowConfirm(false);
		confirm && mutate(data.id);
	};

	const editHandler = (p) => {
		setShowForm(true);
		setData(p);
	};

	const deleteHandler = (p) => {
		setShowConfirm(true);
		setData(p);
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>نام کالا</th>
						<th>موجودی</th>
						<th>قیمت</th>
						<th>شناسه کالا</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{displayed.map((product) => (
						// <Product key={product.id} product={product} setShowForm={setShowForm} />
						<tr key={product.id}>
							<td>{product.name}</td>
							<td>{product.quantity}</td>
							<td>{product.price}</td>
							<td>{product.id}</td>
							<td>
								<div className={styles.buttons}>
									<button
										onClick={() => editHandler(product)}
										style={{ color: "#4ADE80" }}
									>
										<FaRegPenToSquare />
									</button>
									<button
										onClick={() => deleteHandler(product)}
										style={{ color: "#e40012" }}
									>
										<FaRegTrashCan />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{
				<Modal
					showForm={showForm}
					setShowForm={setShowForm}
					showConfirm={showConfirm}
					confirmHandler={confirmHandler}
					product={data}
					type="edit"
				/>
			}
		</>
	);
}

export default Table;
