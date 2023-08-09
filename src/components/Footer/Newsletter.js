import React from "react";
import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => {
	return (
		<div className="app__newsletter ">
			<SubHeading title={"Newsletter"} />
			<h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
			<p className="p__opensans">And never miss latest Updates!</p>
			<form>
				<input type="email" name="" id="" placeholder="Email Address" />
				<button type="button" className="custom__button">
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default Newsletter;
