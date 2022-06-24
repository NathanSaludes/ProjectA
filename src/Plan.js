import PlanHeading from "./components/PlanHeading";
import PlanIcon from "./components/PlanIcon";
import PlanTitle from "./components/PlanTitle";

const Plan = ({
	headingText,
	title,
	secondaryText,
	value,
	unit,
	styles,
	icon
}) => {
	return (
		<div className={styles}>
			<PlanHeading text={headingText} />
			<div
				className="flex flex-col min-w-fit bg-white rounded-2xl p-7"
				style={{ width: "18rem", height: "16.2rem", maxWidth: "40rem" }}
			>
				{/* ICON */}
				<PlanIcon icon={icon} />

				{/* CONTENT */}
				<div>
					<PlanTitle text={title} />
					<div className="flex flex-row justify-between">
						<div>
							<p className="text-slate-400 mb-1.5 text-sm font-light">
								{secondaryText}
							</p>
							<p className="font-semibold text-3xl tracking-tight text-slate-700">
								{value} <span className="text-base">{unit}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Plan;
