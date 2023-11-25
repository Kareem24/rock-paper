/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer/reducer";

export const GameContext = createContext();
export function GameContextProvider({ children }) {
	const [image, setImage] = useState(null);
	const [image2, setImage2] = useState(null);
	const [housePick, setHousePick] = useState(false);
	const [state, dispatch] = useReducer(reducer, initialState);
	const { score, compScore, winMessage, counter, showWinMessage } = state;
	return (
		<GameContext.Provider
			value={{
				score,
				compScore,
				counter,

				image,
				image2,
				housePick,
				showWinMessage,
				winMessage,
				dispatch,

				setImage,
				setImage2,
				setHousePick,
			}}>
			{children}
		</GameContext.Provider>
	);
}
