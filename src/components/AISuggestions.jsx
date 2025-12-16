import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const AISuggestions = () => {
	const { searchResults, fetchedMovies } = useSelector((store) => store.search);
	if (!searchResults) return null;

	return (
		<div className="flex justify-center px-4 pb-12">
			<div className="w-full max-w-6xl bg-black/80 text-white rounded-xl p-4 md:p-6">
				<MovieList title={"Results"} movies={fetchedMovies} />
			</div>
		</div>
	);
};

export default AISuggestions;
