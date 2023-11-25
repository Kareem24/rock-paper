/* eslint-disable react/prop-types */

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GameContext } from "./GameContextProvider";

const WinMessage = () => {
	const { winMessage, setHousePick, dispatch } = useContext(GameContext);
	return (
		<div className="w-full col-span-2 self-center justify-self-center text-center md:col-span-1 md:order-2">
			<p className="text-4xl font-bold uppercase mb-4">{winMessage}</p>
			<NavLink to="/">
				<button
					className="py-2 px-4 rounded-md text-darkText bg-white w-3/5 md:w-full text-xs m-auto
         uppercase"
					onClick={() => {
						setHousePick(false);
						dispatch({ type: "HIDE_WIN_MESSAGE" });
					}}>
					play again
				</button>
			</NavLink>
		</div>
	);
};

export default WinMessage;
