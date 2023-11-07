import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
	return (
		<div>
			<ul>
				<li>
					<NavLink to={"/home"}>home</NavLink>
				</li>
				<li>
					<NavLink to={"/pricing"}>pricing</NavLink>
				</li>
				<li>
					<NavLink to={"/product"}>product</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
