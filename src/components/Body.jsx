import React from "react";
import SignIn from "./SignIn";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AuthWatcher from "./AuthWatcher";

const appRouter = createBrowserRouter([
	{
		element: <AuthWatcher />, // 👈 auth logic here
		children: [
			{
				path: "/",
				element: <SignIn />,
			},
			{
				path: "/browse",
				element: <Browse />,
			},
		],
	},
]);

const Body = () => {
	return <RouterProvider router={appRouter} />;
};

export default Body;
