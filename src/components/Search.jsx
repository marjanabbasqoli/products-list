import { FaSistrix } from "react-icons/fa6";
import { useProducts } from "../services/queries";
import styles from "./Search.module.scss";

function Search({ search, setSearch, setDisplayed }) {
	const { data } = useProducts();

	const searchHandler = () => {
		const products = data?.data.data;
		if (!search) {
			setDisplayed(products);
			return;
		}
		const result = products?.filter((p) => p.name.includes(search.trim()));
		setDisplayed(result);
	};

	return (
		<div className={styles.searchBox}>
			<input
				type="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyUp={searchHandler}
				placeholder="جستجو کالا"
			/>
			<FaSistrix className={styles.icon} />
		</div>
	);
}

export default Search;
