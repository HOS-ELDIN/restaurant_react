import React from "react";

import "./FooterContent.css";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const FooterContent = () => (
	<div className="app__footerContent section__padding app__bg">
		<div className="app__footerContent-container">
			<div className="app__footerContent-container_contact">
				<h3 className="column-head">Contact Us</h3>
				<p>9 W 53rd St, New York, NY 10019, USA</p>
				<p>+1 212-344-1230</p>
				<p>+1 212-555-1230</p>
			</div>
			<div className="app__footerContent-container_center">
				<p className="headtext__cormorant">Gerícht</p>
				<p className="p__opensans">
					"The best way to find yourself is to lose yourself in the service of
					others.”
				</p>
				<img src={images.spoon} alt="spoon" />
				<div className="app__footerContent-container_center-social">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>
			<div className="app__footerContent-container_workinghours">
				<h3 className="column-head">Working Hours</h3>
				<p>
					Monday-Friday:
					<br /> 08:00 am -12:00 am
				</p>
				<p>
					Saturday-Sunday:
					<br />
					07:00am -11:00 pm
				</p>
			</div>
		</div>
		<div className="app__footerContent-copyright">
			<p>{new Date().getFullYear()} Gerícht. All Rights reserved.</p>
		</div>
	</div>
);

export default FooterContent;
