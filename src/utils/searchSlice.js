import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		showSearch: false,
		searchResults: [],
		fetchedMovies: [],
		loading: false,
		error: null,
	},
	reducers: {
		toggleSearchView: (state) => {
			state.showSearch = !state.showSearch;
		},
		aiSearchStart: (state) => {
			state.loading = true;
			state.error = null;
		},

		aiSearchSuccess: (state, action) => {
			const {searchResults, fetchedMovies} = action.payload;
			state.loading = false;
			state.searchResults = searchResults;
			state.fetchedMovies = fetchedMovies;
		},

		aiSearchFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		clearRecommendations: (state) => {
			state.recommendations = [];
			state.error = null;
			state.loading = false;
		},
	},
});

export const {
	toggleSearchView,
	clearRecommendations,
	aiSearchFailure,
	aiSearchStart,
	aiSearchSuccess,
} = searchSlice.actions;
export default searchSlice.reducer;
