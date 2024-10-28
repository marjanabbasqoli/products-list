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
import AuthProvider from "../providers/AuthProvider";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<AuthProvider>
							<ProductsPage />
						</AuthProvider>
					}
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
