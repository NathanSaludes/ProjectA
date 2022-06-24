import { ChevronUpIcon } from "@heroicons/react/solid";

const PaymentFooter = () => {
	return (
		<div className="bg-white fixed w-full bottom-0 flex px-32 py-8 text-white">
			<div className="left flex flex-col">
				<p className="text-slate-400">Add-On Total (1 Items)</p>
				<div className="flex items-center mt-0.5">
					<span className="text-3xl font-bold text-slate-800 mr-4">
						$18.50
					</span>
					<a
						href="#show_detail"
						className="text-blue-900 brightness-150 tracking-tight"
					>
						Show Detail
						<ChevronUpIcon height={15} className="inline-flex ml-1.5" />
					</a>
				</div>
			</div>
			<div className="right  ml-auto flex">
				<div className="flex flex-col items-end">
					<p className="text-slate-400">Total</p>
					<p className="text-3xl font-bold text-slate-800 mt-0.5">
						$63.50
					</p>
				</div>
				<button className="py-4 px-20 bg-orange-500 shadow-lg shadow-orange-500/50 brightness-150 rounded-2xl ml-8 tracking-wider">
					Payment
				</button>
			</div>
		</div>
	);
};

export default PaymentFooter;
