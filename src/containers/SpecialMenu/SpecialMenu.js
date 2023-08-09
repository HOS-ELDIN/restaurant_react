import React from "react";
import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => {
	const title = "Menu that fits you palatte";
	return (
		<div className="app__specialMenu flex__center section__padding " id="menu">
			<div className="app__specialMenu-title">
				<SubHeading title={title} />
				<h1 className="headtext__cormorant">Today’s Special</h1>
			</div>

			<div className="app__specialMenu-menu">
				<div className="app__specialMenu-menu_juice">
					<p className="app__specialMenu-menu_heading">Juices</p>
					<div className="app__specialMenu-menu_items">
						{data.juices.map((juice, index) => (
							<MenuItem item={juice} key={index} />
						))}
					</div>
				</div>

				<div className="app__specialMenu-menu_img">
					<img src={images.menu} alt="menu" />
				</div>

				<div className="app__specialMenu-menu_cocktails">
					<p className="app__specialMenu-menu_heading">Cocktails</p>
					<div className="app__specialMenu-menu_items">
						{data.cocktails.map((cocktail, index) => (
							<MenuItem item={cocktail} key={index} />
						))}
					</div>
				</div>
			</div>

			<div>
				<button type="button" className="custom__button">
					View More
				</button>
			</div>
		</div>
	);
};

export default SpecialMenu;
