const PlanIcon = ({ icon, small }) => {
	let size = "p-4 w-14 h-14";
	if (small) {
		size = "p-3.5 w-11 h-11";
	}

	return (
		<div
			className={`${size} rounded-lg flex items-center justify-center text-white mb-5 bg-gradient-to-br from-orange-100 to-orange-400`}
		>
			<img src={icon} />
		</div>
	);
};

export default PlanIcon;
