const Footer = () => {
	const link = "https://henok.us";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Mulsew M{" "}
			<a href={link} target={target}>
				MulsewM
			</a>
		</div>
	);
};

export default Footer;
