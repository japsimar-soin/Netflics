import React from "react";
import { useSelector } from "react-redux";
import useGetBackgroundMovieTrailer from "../hooks/useGetBackgroundMovieTrailer";

const VideoBackground = ({ movieId }) => {
	console.log("🎥 VideoBackground render, movieId:", movieId);

	const backgroundTrailer = useSelector(
		(store) => store.movies?.backgroundTrailer
	);

	useGetBackgroundMovieTrailer(movieId);

	if (!backgroundTrailer?.key) return null;

	return (
		<div className="absolute inset-0 z-0">
			<iframe
				className="w-full h-full object-cover"
				src={`https://www.youtube.com/embed/${backgroundTrailer.key}?autoplay=1&mute=1&controls=0&showinfo=0`}
				title="youtube video player"
				allow="autoplay; encrypted-media"
			/>
		</div>
	);
};

export default VideoBackground;
