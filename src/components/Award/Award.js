import React from "react";
import "./Award.css";

const Award = ({ award }) => {
	return (
		<div className="app__award-main">
			<div className="app__award-main_img">
				<img src={award.imgUrl} alt={award.title} />
			</div>
			<div className="app__award-main_info">
				<h3>{award.title}</h3>
				<p >{award.subtitle}</p>
			</div>
		</div>
	);
};

export default Award;
