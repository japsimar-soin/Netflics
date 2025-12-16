import React from "react";
import { useSelector } from "react-redux";
import useGetBackgroundMovieTrailer from "../hooks/useGetBackgroundMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const backgroundTrailer = useSelector(
		(store) => store.movies?.backgroundTrailer
	);

	useGetBackgroundMovieTrailer(movieId);

	return (
		<div className="relative w-full aspect-video overflow-hidden">
			<iframe
				className="absolute inset-0 w-full h-full"
				src={
					backgroundTrailer?.key
						? "https://www.youtube.com/embed/" +
						  backgroundTrailer.key +
						  "?autoplay=1&mute=1"
						: ""
				}
				title="youtube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			/>
		</div>
	);
};

export default VideoBackground;
