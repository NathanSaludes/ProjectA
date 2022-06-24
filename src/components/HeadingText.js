const HeadingText = ({ children }) => {
	return (
		<h1
			style={{ fontSize: "4rem" }}
			className="font-semibold tracking-tight text-white"
		>
			{children}
		</h1>
	);
};

export default HeadingText;
