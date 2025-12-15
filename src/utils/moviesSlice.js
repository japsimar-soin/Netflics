import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: [],
		backgroundTrailer: null,
		popularMovies: []
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addBackgroundTrailer: (state, action) => {
			state.backgroundTrailer = action.payload;
		},
	},
});

export const { addNowPlayingMovies, addBackgroundTrailer, addPopularMovies } =
	moviesSlice.actions;

export default moviesSlice.reducer;
