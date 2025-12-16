import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import {
	aiSearchFailure,
	aiSearchStart,
	aiSearchSuccess,
} from "../utils/searchSlice";
import { API_OPTIONS } from "../utils/constants";

const AISearchBar = () => {
	const selectedLang = useSelector((store) => store.config.lang);
	const searchText = useRef(null);

	const dispatch = useDispatch();

	const fetchMovieFromTMDB = async (movieTitle) => {
		const data = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
				movieTitle
			)}&include_adult=false&language=en-US&page=1`,
			API_OPTIONS
		);

		const json = await data.json();
		if (!json?.results) return null;

		const exactMatch = json.results.find(
			(m) => m.title.toLowerCase() === movieTitle.toLowerCase()
		);

		return exactMatch || null;
	};

	const handleAISearch = async () => {
		const query = searchText.current.value;
		if (!query) return;

		dispatch(aiSearchStart());

		try {
			const res = await fetch("/api/ai/recommend", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ query }),
			});

			if (!res.ok) {
				const text = await res.text();
				throw new Error(text || "AI request failed");
			}

			const text = await res.text();
			const data = text ? JSON.parse(text) : { movies: [] };

			const promiseArray = data.movies.map((movie) =>
				fetchMovieFromTMDB(movie)
			);

			const resolvedPromises = await Promise.all(promiseArray);
			dispatch(
				aiSearchSuccess({
					searchResults: data.movies,
					fetchedMovies: resolvedPromises,
				})
			);
		} catch (error) {
			console.error(error);
			dispatch(aiSearchFailure("Failed to fetch recommendations"));
		}
	};

	return (
		<div className="flex justify-center px-4 pt-28 md:pt-24">
			<form
				action=""
				onSubmit={(e) => e.preventDefault()}
				className="
					w-full max-w-3xl
					bg-black rounded-xl
					p-4 md:p-6
					flex flex-col md:flex-row
					gap-4
				"
			>
				<input
					type="text"
					ref={searchText}
					placeholder={lang[selectedLang].searchPlaceholder}
					className="
						flex-1
						p-3 md:p-4
						text-amber-100
						bg-black
						rounded-lg
						border border-amber-50
						focus:outline-none focus:ring-2 focus:ring-red-600
					"
				/>
				<button
					onClick={handleAISearch}
					className="
						w-full md:w-auto
						px-6 py-3
						bg-red-700 hover:bg-red-800
						text-white
						rounded-lg
						transition
					"
				>
					{lang[selectedLang].search}
				</button>
			</form>
		</div>
	);
};

export default AISearchBar;
