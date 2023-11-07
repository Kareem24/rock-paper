/* eslint-disable react/prop-types */
import scissors from "../assets/images/icon-scissors.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import Image from "../components/Image";
import { NavLink } from "react-router-dom";
import { data } from "../data";
import { useContext } from "react";
import { GameContext } from "../components/GameContextProvider";
const MainPage = () => {
	const { setImage, setImage2, dispatch, setHousePick } =
		useContext(GameContext);
	const random = Math.floor(Math.random() * 3);

	const checkWin = (user, house) => {
		dispatch({ type: "INCREASE_COUNTER" });
		if (user.name === house.name) {
			dispatch({ type: "TIE" });
			return;
		}

		if (user.name === "paper" && house.name !== "rock") {
			dispatch({ type: "LOOSE" });
			return;
		}

		if (user.name === "rock" && house.name !== "scissors") {
			dispatch({ type: "LOOSE" });
			return;
		}

		if (user.name === "scissors" && house.name !== "paper") {
			dispatch({ type: "LOOSE" });
			return;
		}

		dispatch({ type: "WIN" });
	};

	const handleClick = (e) => {
		const currTarget = e.currentTarget;
		const id = currTarget.dataset.id;
		const iconSelect = data.find((item) => item.id === +id);
		setTimeout(() => {
			setHousePick(true);
			setTimeout(() => {
				checkWin(iconSelect, data[Number(random)]);
				dispatch({ type: "SHOW_WIN_MESSAGE" });
				// setShowWinMessage(true);
			}, 400);
		}, 400);

		setImage(iconSelect);
		setImage2(data[Number(random)]);
	};
	return (
		<>
			<div className="w-1/2 m-auto flex items-center justify-center bg-triangle bg-no-repeat bg-center bg-[length:200px] mt-20">
				<div>
					<div className="m-auto flex space-x-10  items-center">
						<NavLink to="/win">
							<Image
								src={paper}
								color={"cyan"}
								extraStyle={" mt-[-20px]"}
								onClick={handleClick}
								id={1}
							/>
						</NavLink>
						<NavLink to="/win">
							<Image
								src={scissors}
								color={"scissors"}
								extraStyle={" mt-[-20px]"}
								onClick={handleClick}
								id={2}
							/>
						</NavLink>
					</div>
					<NavLink to="/win">
						<Image
							src={rock}
							color={"rock"}
							extraStyle={" ml-[70px] lg:ml-20 mt-5 "}
							onClick={handleClick}
							id={3}
						/>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default MainPage;
