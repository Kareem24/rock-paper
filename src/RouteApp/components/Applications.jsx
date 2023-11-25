import { data } from "../data";
import Name from "./Name";

function Applications() {
	return (
		<div className="text-white">
			applications
			<ul>
				{data.map((names) => (
					<Name key={names.id} names={names} />
				))}
			</ul>
		</div>
	);
}

export default Applications;
