import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ moviePoster }) => {
	return (
		<div className="w-48 pr-3">
			<img src={IMG_CDN + moviePoster} alt="Movie Card" />
		</div>
	);
};

export default MovieCard;
