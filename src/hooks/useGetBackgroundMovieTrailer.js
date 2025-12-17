import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addBackgroundTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGetBackgroundMovieTrailer = (movieId) => {
	const dispatch = useDispatch();

	const getMovieVideos = async () => {
		console.log("📡 Fetching videos for movie:", movieId);

		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			API_OPTIONS
		);

		const json = await res.json();
		console.log("📦 TMDB videos response:", json);

		if (!json.results || json.results.length === 0) {
			console.warn("No videos found for movie:", movieId);
			return; // 🔴 THIS was missing
		}

		const trailers = json.results.filter((video) => video.type === "Trailer");

		const selectedTrailer = trailers.length ? trailers[0] : json.results[0];

		if (!selectedTrailer?.key) {
			console.warn("No playable trailer for movie:", movieId);
			return;
		}

		dispatch(addBackgroundTrailer(selectedTrailer));
	};

	useEffect(() => {
		console.log("🎬 useGetBackgroundMovieTrailer effect, movieId:", movieId);
		if (!movieId) return;
		getMovieVideos();
	}, [movieId]);
};

export default useGetBackgroundMovieTrailer;
