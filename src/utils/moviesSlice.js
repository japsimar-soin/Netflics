import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		backgroundTrailer: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addBackgroundTrailer: (state, action) => {
			state.backgroundTrailer = action.payload;
		},
	},
});

export const { addNowPlayingMovies, addBackgroundTrailer } =
	moviesSlice.actions;

export default moviesSlice.reducer;
