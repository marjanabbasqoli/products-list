import TanstackQueryProvider from "./providers/tanStackQueryProvider";
import { Toaster } from "react-hot-toast";

import Router from "./Router/Router";
import "./global.scss";

function App() {
	return (
		<TanstackQueryProvider>
			<Router />
			<Toaster />
		</TanstackQueryProvider>
	);
}

export default App;
