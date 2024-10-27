import React, { useEffect, useState } from "react";

import { useProducts } from "../services/queries";

import Search from "../components/Search";
import Table from "../components/Table";
import Modal from "../components/Modal";

import icon from "../assets/header-icon.svg";
import styles from "./ProductsPage.module.scss";

function ProductsPage() {
	const [showForm, setShowForm] = useState(false);
	const { data, isFetching, isError, error, isPending } = useProducts();
	const [search, setSearch] = useState("");
	const [displayed, setDisplayed] = useState([]);

	useEffect(() => {
		data ? setDisplayed(data.data.data) : setDisplayed([]);
	}, [data]);

	return (
		<div className={styles.body}>
			<div className={styles.container}>
				<Search search={search} setSearch={setSearch} setDisplayed={setDisplayed} />
				<div>
					<div className={styles.header}>
						<h2>
							<img src={icon} alt="icon" />
							مدیریت کالا
						</h2>

						<button onClick={() => setShowForm(true)} className={styles.add}>
							افزودن محصول
						</button>
						{<Modal setShowForm={setShowForm} showForm={showForm} type="add" />}
					</div>
					{isPending && <p className={styles.messageBox}>loading...</p>}
					{isError ? (
						error.status === 400 ? (
							<p className={styles.messageBox}>محصولی وجود ندارد</p>
						) : (
							error?.messageک
						)
					) : (
						data && <Table displayed={displayed} />
					)}
				</div>
			</div>
		</div>
	);
}

export default ProductsPage;
