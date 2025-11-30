import React from "react";
import SignIn from "./SignIn";
import Browse from "./Browse";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

const Body = () => {
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <SignIn />,
		},
		{
			path: "/browse",
			element: <Browse />,
		},
	]);

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
