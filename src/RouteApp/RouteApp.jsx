import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Applications from "./components/Applications";
import Apps from "./components/Apps";
import Details from "./components/Details";

const RouteApp = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="home" element={<Home />} />
					<Route path="pricing" element={<Pricing />}>
						<Route index element={<Navigate to={"app"} replace />} />
						<Route path="app" element={<Applications />} />
						<Route path="apps" element={<Apps />} />
						<Route path="app/:id" element={<Details />} />
					</Route>
					<Route path="product" element={<Product />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default RouteApp;
