import React from "react";

function About() {
	const link = "#";
	const target = "_blank";

	return (
		<div className="container">
			<h1>MERN CRUD APP</h1>
			<p>
				<b>Front-end</b>: React.js v17+ with RRDv6+
			</p>
			<p>
				<b>Back-end</b>: Node.js, Express.js
			</p>
			<p>
				<b>Database</b>: MongoDB Atlas with Mongoose ODM
			</p>
			<p>
				<b>Developed By</b>: Mulsew M
				<p>
					<a href={link} target={target}>
					#
					</a>
				</p>
			</p>
		</div>
	);
}

export default About;
