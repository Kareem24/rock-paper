import { Link } from "react-router-dom";

function PageNotFound() {
	return (
		<div className="flex items-center justify-center flex-col gap-32 p-20">
			<h2 className="text-white font-bold">Page not found</h2>
			<p className="underline text-purple-700 capitalize">
				<Link to={"/"}>back to home</Link>
			</p>
		</div>
	);
}

export default PageNotFound;
