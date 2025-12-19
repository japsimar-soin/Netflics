import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();
	const nowPlayingMovies = useSelector(
		(store) => store.movies.nowPlayingMovies
	);

	const getNowPlayingMovies = async () => {
		const nowPlayingMoviesData = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			API_OPTIONS
		);

		const json = await nowPlayingMoviesData.json();
		dispatch(addNowPlayingMovies(json.results));
	};

	useEffect(() => {
		if (nowPlayingMovies.length === 0) getNowPlayingMovies();
	}, []);
};

export default useNowPlayingMovies;
