import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom";

function Pricing() {
	return (
		<div className="text-white">
			<p>pricing</p>
			<nav className="flex gap-4">
				<NavLink to={"app"}>apps</NavLink>
				<NavLink to={"apps"}>applications</NavLink>
			</nav>
			<Outlet />
		</div>
	);
}

export default Pricing;
