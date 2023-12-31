import React, { useRef } from "react";
import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import {
	BsInstagram,
	BsArrowLeftShort,
	BsArrowRightShort,
} from "react-icons/bs";

const Gallery = () => {
	const scrollRef = useRef();

	const scroll = (dir) => {
		const { current } = scrollRef;
		if (dir === "left") {
			current.scrollLeft -= 330;
		}
		if (dir === "right") {
			current.scrollLeft += 330;
		}
	};

	const imgs = [
		images.gallery01,
		images.gallery02,
		images.gallery03,
		images.gallery04,
	];

	return (
		<div className="app__gallery">
			<div className="app__gallery-content">
				<SubHeading title={"Instagram"} />
				<h1 className="headtext__cormorant">Photo Gallery</h1>
				<p className="p__opensans">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
					mattis ipsum turpis elit elit scelerisque egestas mu.
				</p>
				<button type="button" className="custom__button">
					View More
				</button>
			</div>
			<div className="app__gallery-images">
				<div className="app__gallery-images_container" ref={scrollRef}>
					{imgs.map((img, index) => (
						<div className="app__gallery-images_card flex__center" key={index}>
							<img src={img} alt={`gallery ${index + 1}`} />
							<BsInstagram className="gallery__image-icon" />
						</div>
					))}
				</div>
				<div className="app__gallery-images_arrows">
					<BsArrowLeftShort
						className="gallery__arrow-icon"
						onClick={() => {
							scroll("left");
						}}
					/>
					<BsArrowRightShort
						className="gallery__arrow-icon"
						onClick={() => {
							scroll("right");
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
