import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import AISearch from "./AISearch";
import { useSelector } from "react-redux";

const Browse = () => {
	const searchView = useSelector((store) => store.search.showSearch);
	useNowPlayingMovies();
	usePopularMovies();

	return (
		<div className="relative min-h-screen bg-black overflow-x-hidden">
			<Header />
			{searchView ? (
				<AISearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Browse;
