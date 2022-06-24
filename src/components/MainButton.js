import { ArrowLeftIcon } from "@heroicons/react/outline";

const MainButton = () => {
	return (
		<button className="bg-white bg-opacity-30 text-white py-2 pl-3 pr-4 mb-3 flex max-w-fit items-center rounded-full">
			<ArrowLeftIcon height={20} strokeWidth={3} className="mr-3" />
			<span className="font-semibold">BROWSE MAIN PLAN</span>
		</button>
	);
};

export default MainButton;
