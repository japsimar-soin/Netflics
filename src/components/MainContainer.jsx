import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);
	if (!movies || movies.length === 0) return null;

	const backgroundMovie = movies[0];
	const { original_title, overview, id } = backgroundMovie;

	return (
		<div className="h-[50vh] bg-red-500 text-white">
		MAIN CONTAINER
	</div>
	);
};

export default MainContainer;
