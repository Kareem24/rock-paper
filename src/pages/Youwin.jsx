/* eslint-disable react/prop-types */
import { useContext } from "react";
import Image from "../components/Image";
import { Box } from "../components/Box";
import { DarkCircle } from "../components/DarkCircle";
import { GameContext } from "../components/GameContextProvider";
import WinMessage from "../components/WinMessage";

const YouWin = ({ children }) => {
	const { image, image2, housePick, showWinMessage } = useContext(GameContext);

	return (
		<div className="text-white md:w-3/5  w-4/5 m-auto  grid grid-cols-2 mt-6 gap-14 md:grid-cols-3 mb-10 ">
			<div className="flex flex-col  justify-self-end md:order-1">
				<p className="uppercase font-semibold text-xs lg:text-sm mt-7 order-last md:order-first md:mb-7">
					you picked{" "}
				</p>
				<Image color={image?.colorClass} src={image?.img} />
			</div>
			<div className="flex flex-col w-full md:order-3 ">
				<p className="uppercase font-semibold text-xs lg:text-sm mt-7 order-last md:order-first md:mb-7 w-full">
					the house picked{" "}
				</p>
				{housePick ? (
					<Image color={image2?.colorClass} src={image2?.img} />
				) : (
					<DarkCircle />
				)}
			</div>

			{showWinMessage ? <WinMessage /> : <Box />}
		</div>
	);
};
export default YouWin;
