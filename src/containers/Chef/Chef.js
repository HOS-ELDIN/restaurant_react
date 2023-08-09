import React from "react";
import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => {
	const title = "Chef’s Word";
	return (
		<div className="app__bg section__padding app__wrapper">
			<div className="app__wrapper_img app__wrapper_img-reverse">
				<img src={images.chef} alt="chef" />
			</div>
			<div className="app__wrapper_info">
				<SubHeading title={title} />
				<h1 className="headtext__cormorant">What we believe in</h1>
				<div className="app__chef-content">
					<div className="app__chef-content_quote">
						<p className="p__opensans">
							<img src={images.quote} alt="quote" className="quote-icon" />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
							sit.auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
							eget sit. Nulla scelerisque scelerisque congue ac consequat,
							aliquam molestie lectus eu. Congue iaculis integer curabitur
							semper sit nunc.
						</p>
					</div>
				</div>
				<div className="app__chef-sign">
					<p>Kevin Luo</p>
					<p className="p__opensans">Chef & Founder</p>
					<img src={images.sign} alt="sign" />
				</div>
			</div>
		</div>
	);
};

export default Chef;
