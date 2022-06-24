import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import HeadingText from "./components/HeadingText";
import MainButton from "./components/MainButton";
import PaymentFooter from "./components/PaymentFooter";
import MainPlan from "./MainPlan";
import Plan from "./Plan";

import PhoneIcon from "./assets/phone.svg";
import MessageIcon from "./assets/message.svg";

const App = () => {
	return (
		<div className="w-full flex flex-col items-center">
			<HeroImage />
			<Header />

			{/* MAIN CONTENT WRAPPER */}
			<div className="flex flex-col min-h-screen pt-14 px-32 mb-60 mx-auto">
				<MainButton />
				<HeadingText>Craft your suitable plan</HeadingText>

				<div className="pt-10 flex flex-row">
					<MainPlan />
					<Plan
						icon={PhoneIcon}
						styles="mr-7"
						headingText="Call Plan"
						title="Call"
						secondaryText="Talktime"
						unit="HRS"
						value="120"
					/>
					<Plan
						icon={MessageIcon}
						headingText="SMS Plan"
						title="SMS"
						secondaryText="SMS"
						unit="SMS"
						value="120"
					/>
				</div>
			</div>

			<PaymentFooter />
		</div>
	);
};

export default App;
