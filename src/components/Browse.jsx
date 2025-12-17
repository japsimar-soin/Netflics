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
		<div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20">
        {searchView ? (
          <AISearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </main>
    </div>
	);
};

export default Browse;
