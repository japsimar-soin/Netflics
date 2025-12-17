import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

	const SecondaryContainer = () => {
		const movies = useSelector((store) => store.movies);
	
		return (
			<div className="relative z-20 -mt-32 bg-black">
				<MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
				<MovieList title="Popular" movies={movies.popularMovies} />
			</div>
		);
	};
	
	export default SecondaryContainer;
