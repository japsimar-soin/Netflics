import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video absolute text-white pt-36 px-12 bg-gradient-to-r from-black">
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="py-6 text-lg w-2/3">{overview}</p>
			<div className="flex">
				<button className="bg-gray-300/50 text-black p-2 text-lg px-12 rounded-lg">
					▶ Play
				</button>
				<button className="bg-gray-300/50 text-black ml-2 p-2 px-8 rounded-lg">
					ℹ More info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
