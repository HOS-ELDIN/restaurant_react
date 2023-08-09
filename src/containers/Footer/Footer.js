import React from "react";
import "./Footer.css";
import { Newsletter, FooterContent } from "../../components";

const Footer = () => {
	return (
		<div className="app__footer">
			<Newsletter />
			<div className="app__bg app__footer-space" />
			<FooterContent />
		</div>
	);
};

export default Footer;
