import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addBackgroundTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGetBackgroundMovieTrailer = (movieId) => {
	const dispatch = useDispatch();
	const trailer = useSelector((store) => store.movies.backgroundTrailer);
	
	const getMovieVideos = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			API_OPTIONS
		);
		const json = await data.json();

		const filteredData = json.results.filter(
			(video) => video.type === "Trailer"
		);
		const trailer = filteredData.length ? filteredData[0] : json.results[0];
		dispatch(addBackgroundTrailer(trailer));
	};

	useEffect(() => {
		if (!trailer) getMovieVideos();
	}, []);
};

export default useGetBackgroundMovieTrailer;
