import PlanHeading from "./components/PlanHeading";
import PlanIcon from "./components/PlanIcon";
import PlanTitle from "./components/PlanTitle";

import RocketIcon from "./assets/rocket.svg";

const Content = ({ secondaryText, value, unit }) => {
	return (
		<div>
			<p className="text-slate-400 mb-1.5 text-sm font-light">
				{secondaryText}
			</p>
			<p className="font-semibold text-3xl tracking-tight text-slate-700">
				{value} <span className="text-base">{unit}</span>
			</p>
		</div>
	);
};

const AddOn = ({ active, title, price }) => {
	return (
		<button
			className={`relative flex flex-col min-w-max p-6 rounded-3xl border bg-white mr-7 ${
				active ? " border-orange-300" : "border-slate-200"
			}`}
			style={{ width: "17rem", height: "14.5rem" }}
		>
			{/* Icon */}
			<PlanIcon small icon={RocketIcon} />
			<p className="text-xl tracking-tight font-semibold text-slate-600 mb-1">
				{title}
			</p>
			<p className="text-slate-400 mb-4 text-sm font-light">
				Validity follow the main plan
			</p>
			<div
				className={`absolute flex -bottom-0 left-0 px-6 py-3.5 rounded-b-2xl ${
					active
						? "border-2 border-orange-300 bg-orange-300"
						: "bg-transparent"
				} w-full`}
			>
				<p
					className={`text-3xl font-semibold  ${
						active ? "text-white" : "text-slate-700"
					}`}
				>
					${price}
				</p>
			</div>
		</button>
	);
};

const MainPlan = () => {
	return (
		<div className="mr-7">
			<PlanHeading text="Main Plan" />
			<div
				className="flex flex-col min-w-fit bg-white rounded-t-2xl p-7"
				style={{ width: "30rem", maxWidth: "40rem" }}
			>
				<PlanIcon icon={RocketIcon} />
				<div className="relative pb-7">
					<PlanTitle text="Super Monthly Plan" />
					<div className="flex flex-row justify-between">
						{/* Internet Data */}
						<Content secondaryText="Internet Data" value="20" unit="GB" />

						{/* Validity */}
						<Content secondaryText="Validity" value="30" unit="DAYS" />

						{/* Price */}
						<div className="flex flex-col items-end ml-20">
							<p className="text-slate-400 mb-1.5 text-sm font-light">
								Price
							</p>
							<p className="font-semibold text-3xl tracking-tight text-slate-700">
								$45.00
							</p>
						</div>
					</div>

					<div
						className="absolute rounded-bl-3xl bg-transparent w-14 h-14"
						style={{ right: "-5.2rem", boxShadow: "0 25px 0 0 #fff" }}
					></div>
					{/* Add Ons */}
					<div
						className="absolute -left-7 mt-14 p-8 bg-white rounded-r-2xl rounded-b-2xl"
						style={{ width: "69.5rem" }}
					>
						<h3 className="text-xl text-slate-700 tracking-tight font-semibold mb-6">
							Select your Add-On
						</h3>
						<div className="inline-flex w-full overflow-x-clip pb-4">
							<AddOn title="Add-On 5 GB" price="10.00" />
							<AddOn title="Add-On 10 GB" price="18.50" active />
							<AddOn title="Add-On 15 GB" price="26.00" />
							<AddOn title="Add-On 20 GB" price="52.99" />
							<AddOn title="Add-On 30 GB" price="70.50" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPlan;
