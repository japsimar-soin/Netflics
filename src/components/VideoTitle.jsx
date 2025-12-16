import React from "react";

const VideoTitle = ({ title, overview }) => {
	const truncateText = (overview, limit) => {
		if (!overview) return "";
		return overview.length > limit
			? overview.slice(0, limit) + "..."
			: overview;
	};

	return (
		<div className="w-screen aspect-video absolute text-white pt-36 px-12 bg-gradient-to-r from-black">
			<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h1>

			<p className="py-4 text-sm sm:text-base md:text-lg w-full sm:w-2/3 md:w-2/5">
				{truncateText(overview, 180)}
			</p>

			<div className="flex flex-wrap gap-3">
				<button className="bg-white text-black px-6 py-2 text-sm sm:text-lg rounded-lg hover:opacity-80">
					▶ Play
				</button>
				<button className="bg-gray-400/30 text-black px-5 py-2 text-sm sm:text-lg rounded-lg hover:opacity-60">
					ℹ More info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
