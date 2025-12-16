import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ moviePoster }) => {
	if (!moviePoster) {
		return null;
	}

	return (
		<div className="flex-shrink-0 w-32 sm:w-36 md:w-48">
			<img
				src={IMG_CDN + moviePoster}
				alt="Movie Card"
				className="rounded-md object-cover transition-transform duration-200 hover:scale-105"
			/>
		</div>
	);
};

export default MovieCard;
