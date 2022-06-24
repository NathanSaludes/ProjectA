import { BellIcon } from "@heroicons/react/solid";

import Sun from "../assets/sun.png";

const Header = () => {
	return (
		<div className="relative h-20 w-full bg-transparent border-collapse border-b-2 border-b-white border-opacity-40 flex items-center">
			<div className="nav-container w-full h-fit mx-32 text-base font-light text-white flex">
				<div className="nav-left flex flex-grow items-center">
					<span className="mr-9">
						<img className="h-10" src={Sun} alt="sun" />
					</span>
					<div className="flex">
						<a href="features" className="mr-9">
							Features
						</a>
						<a href="products" className="mr-9">
							Products
						</a>
						<a href="coverage" className="mr-9">
							Coverage
						</a>
						<a href="support" className="mr-9">
							Support
						</a>
					</div>
				</div>
				<div className="nav-right ml-auto flex items-center">
					<a href="notifications" className="mr-5 relative">
						<BellIcon height={23} />
						<span className="dot absolute -top-1 -right-1 h-2 w-2 bg-red-700 bg-opacity-70 rounded-full"></span>
					</a>
					<a href="account" className="flex items-center">
						<img
							src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/277798409_5525405600806909_2127350859347437328_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFGhT1kF4ceh0wr9Y4srmYSN6HE6A4M4so3ocToDgziylKybRMfzvDIpqs6He_gL4zkXAC9hC8QbvTvZ6v0zChl&_nc_ohc=fLVYV7AYruMAX8lt3nR&_nc_ht=scontent.fmnl4-4.fna&oh=00_AT-6fq8uWcKC6EgNs44KzjyV5o5fVm6QgMC9tz1pBCcB6A&oe=62B95C75"
							alt="User"
							className="rounded-full h-9 mr-2"
						/>
						<p>
							Hi <span className="font-normal">Nathaniel</span>,
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
