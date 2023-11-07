import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameContextProvider } from "./components/GameContextProvider";
import Header from "./components/Header";
import Button from "./components/Button";
import MainPage from "./pages/Mainpage";
import YouWin from "./pages/Youwin";
import Modal from "./components/Modal";
import RouteApp from "./RouteApp/RouteApp";
import PageNotFound from "./pages/PageNotFound";

function App() {
	const [isModal, setIsModal] = useState(false);

	return (
		<main className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-start to-end w-full min-h-screen pt-8 md:pt-20 relative">
			<RouteApp />
			<GameContextProvider>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MainPage />}></Route>
						<Route path="win" element={<YouWin />}></Route>
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</GameContextProvider>
			<Button setIsModal={setIsModal} />
			{isModal && <Modal setIsModal={setIsModal} />}
		</main>
	);
}

export default App;
