import React, { useRef, useState } from "react";
import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
	const vidRef = useRef();
	const [play, setPlay] = useState(false);

	const handlePlayVideo = () => {
		setPlay((prev) => !prev);

		play ? vidRef.current.pause() : vidRef.current.play();
	};

	return (
		<div className="app__video">
			<video
				src={meal}
				ref={vidRef}
				type="video/mp4"
				loop
				controls={false}
				muted
			/>
			<div className="app__video-overlay flex__center">
				<div
					className="app__video-overlay_circle flex__center"
					onClick={handlePlayVideo}
				>
					{play ? (
						<BsPauseFill className="icon" />
					) : (
						<BsFillPlayFill className="icon" />
					)}
				</div>
			</div>
		</div>
	);
};

export default Intro;
