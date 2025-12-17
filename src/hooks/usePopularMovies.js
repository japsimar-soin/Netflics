import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
	const dispatch = useDispatch();
	const popularMovies = useSelector((store) => store.movies.popularMovies);
	const getPopularMovies = async () => {
		const popularMoviesData = await fetch(
			"https://api.themoviedb.org/3/movie/popular?page=1",
			API_OPTIONS
		);

		const json = await popularMoviesData.json();
		// console.log(json);
		dispatch(addPopularMovies(json.results));
	};

	useEffect(() => {
		if (!popularMovies || popularMovies.length === 0) {
			getPopularMovies();
		}
	}, []);
};

export default usePopularMovies;
