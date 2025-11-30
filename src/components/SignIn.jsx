import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateSignInData } from "../utils/validate";

const SignIn = () => {
	const backgroundImageUrl =
		"https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg";

	const [isSignedIn, setIsSignedIn] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const email = useRef(null);
	const password = useRef(null);

	const toggleSignIn = () => {
		setIsSignedIn(!isSignedIn);
	};

	const handleSignIn = () => {
		const message = validateSignInData(
			email.current.value,
			password.current.value
		);
		setErrorMessage(message);
	};

	return (
		<div className="relative h-screen w-full">
			<div className="absolute inset-0 z-0">
				<img
					className="h-full w-full object-cover"
					src={backgroundImageUrl}
					alt="Movies in SignIn Background"
				/>
			</div>

			<div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.85)_100%)]"></div>

			<Header />

			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute z-20 w-lg p-4 mx-auto 
    top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
    text-white bg-black/75 rounded-lg"
			>
				<p className="text-4xl font-semibold mb-8">
					{isSignedIn ? "Sign In" : "Sign Up"}
				</p>
				<p className="text-red-600 font-semibold mb-2">
					{"!! " + errorMessage + " !!"}
				</p>
				{!isSignedIn && (
					<input
						type="text"
						placeholder="Name"
						className="p-3 rounded bg-opacity-70 block w-full mb-4 border border-gray-600"
					/>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Email Address"
					className="p-3 rounded bg-opacity-70 block w-full mb-4 border border-gray-600"
				/>
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-3 rounded bg-opacity-70 block w-full mb-4 border border-gray-600"
				/>
				<button
					onClick={handleSignIn}
					className="w-full py-3 my-4 rounded bg-red-600 hover:bg-red-700 transition"
				>
					{isSignedIn ? "Sign In" : "Sign Up"}
				</button>
				<p onClick={toggleSignIn} className="my-4 pt-4 cursor-pointer">
					{isSignedIn
						? "New to Netflics? Sign Up Now"
						: "Already registered? Sign In Now"}
				</p>
			</form>
		</div>
	);
};

export default SignIn;
