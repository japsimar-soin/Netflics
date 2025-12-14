import React from "react";
import { useSelector } from "react-redux";
import useGetBackgroundMovieTrailer from "../hooks/useGetBackgroundMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const backgroundTrailer = useSelector(
		(store) => store.movies?.backgroundTrailer
	);

  useGetBackgroundMovieTrailer(movieId);

	return (
		<div className="">
			<iframe
      className="w-screen aspect-video"
				src={"https://www.youtube.com/embed/" + backgroundTrailer?.key}
				title="youtube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			></iframe>
		</div>
	);
};

export default VideoBackground;
