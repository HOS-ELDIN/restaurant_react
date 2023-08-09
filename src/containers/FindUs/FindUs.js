import React from "react";
import "./FindUs.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
const FindUs = () => {
	return (
		<div className="app__findus section__padding app__wrapper app__bg" id="contact">
			<div className="app__wrapper_info">
				<SubHeading title={"Contact"} />
				<h1 className="headtext__cormorant">Find Us</h1>

				<div className="app__findus-content">
					<p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
					<h3>Opening Hours</h3>
					<p>Mon - Fri: 10:00 am - 02:00 am</p>
					<p>Sat - Sun: 10:00 am - 03:00 am</p>
				</div>

				<button type="button" className="custom__button">
					Visit Us
				</button>
			</div>
			<div className="app__wrapper_img">
				<img src={images.findus} alt="findus" />
			</div>
		</div>
	);
};

export default FindUs;
