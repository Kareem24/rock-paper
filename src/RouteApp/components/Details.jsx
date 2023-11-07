import { useParams } from "react-router";
import { data } from "../data";
import { useSearchParams } from "react-router-dom";

function Details() {
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const identity = searchParams.get("name");
	console.log(id);
	const singleName = data.find((el) => el.id === Number(id));
	console.log(singleName);

	return (
		<div>
			{singleName.name}
			<p>{identity} </p>
		</div>
	);
}

export default Details;
