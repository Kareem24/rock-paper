/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Name({ names }) {
	const { id, name } = names;
	return (
		<>
			<li>
				<Link to={`${id}?name=${name}&id=${id}`}> {name}</Link>
			</li>
		</>
	);
}

export default Name;
