import React from "react";

const VideoTitle = ({ title, overview }) => {
	const truncateText = (overview, limit) => {
		if (!overview) return "";
		return overview.length > limit
			? overview.slice(0, limit) + "..."
			: overview;
	};
	return (
		<div className="w-screen aspect-video absolute text-white pt-36 px-12 bg-linear-to-r from-black">
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="py-6 text-lg w-2/5">{truncateText(overview, 180)}</p>
			<div className="flex">
				<button className="bg-white text-black p-2 text-lg px-12 rounded-lg hover:opacity-80">
					▶ Play
				</button>
				<button className="bg-gray-400/30 text-black ml-2 p-2 px-8 rounded-lg hover:opacity-60">
					ℹ More info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
