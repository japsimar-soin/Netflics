import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	if (!Array.isArray(movies) || movies.length === 0) {
		return null;
	}

	const safeMovies = movies.filter((movie) => movie && movie.poster_path);
	if (safeMovies.length === 0) {
		return null;
	}

	return (
		<div className="px-4 md:px-6">
			<h1 className="text-lg md:text-2xl text-white py-2 md:py-4">{title}</h1>

			<div className="overflow-x-auto">
				<div className="flex gap-2 md:gap-3">
					{safeMovies.map((movie) => (
						<MovieCard
							key={movie.id}
							moviePoster={movie.poster_path || "Poster "}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
