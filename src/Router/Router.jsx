import {
	BrowserRouter,
	Navigate,
	replace,
	Route,
	Routes,
} from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/404";
import { getCookie } from "../utils/cookie";

function Router() {
	const token = getCookie("token");

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={token ? <ProductsPage /> : <Navigate to="login" />}
				/>
				<Route
					path="/login"
					element={!token ? <LoginPage /> : <Navigate to="/" replace />}
				/>
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
