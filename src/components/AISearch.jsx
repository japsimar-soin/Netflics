import React from "react";
import AISuggestions from "./AISuggestions";
import AISearchBar from "./AISearchBar";
import { NETFLICS_BACKGROUND } from "../utils/constants";

const AISearch = () => {
	return (
		<div className="relative min-h-screen w-full overflow-x-hidden">
			<div className="absolute inset-0 -z-10">
				<img
					className="h-full w-full object-cover"
					src={NETFLICS_BACKGROUND}
					alt="Movies in Search Background"
				/>
				<div className="absolute inset-0 bg-black/50" />
			</div>

			<div className="relative flex flex-col gap-6">
				<AISearchBar />
				<AISuggestions />
			</div>
		</div>
	);
};

export default AISearch;
