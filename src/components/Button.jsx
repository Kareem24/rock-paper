/* eslint-disable react/prop-types */
const Button = ({ setIsModal }) => {
	const handleClick = () => {
		setIsModal(true);
	};
	return (
		<div className="flex items-center justify-center md:justify-end py-10 px-6">
			<button
				className="border-white border-2 px-5 capitalize py-1 text-white rounded-md"
				onClick={handleClick}>
				rules
			</button>
		</div>
	);
};

export default Button;
