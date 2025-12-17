import React from "react";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import {
	NETFLICS_LOGO,
	SUPPORTED_LANGUAGES,
	USER_ICON,
} from "../utils/constants";
import { toggleSearchView } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
	const user = useSelector((store) => store.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const showAISearch = useSelector((store) => store.search.showSearch);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
				console.error(error);
			});
	};

	const handleSearch = () => {
		dispatch(toggleSearchView());
	};

	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};

	return (
<div className="absolute top-0 left-0 z-30 w-full px-4 md:px-16 py-4">
<div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
				<img className="w-40 md:w-48" src={NETFLICS_LOGO} alt="Netflics logo" />

				{user && (
					<div className="flex flex-wrap items-center justify-center gap-2 md:flex-nowrap">
						{showAISearch && (
							<select
								onChange={handleLanguageChange}
								className="p-2 bg-gray-900 text-white rounded-lg"
							>
								{SUPPORTED_LANGUAGES.map((lang) => (
									<option
										key={lang.identifier}
										name={lang.name}
										value={lang.identifier}
									>
										{lang.name}
									</option>
								))}
							</select>
						)}

						<button
							onClick={handleSearch}
							className="px-4 py-2 bg-red-700 rounded-md text-white"
						>
							{showAISearch ? "Home" : "AI Search"}
						</button>

						<img
							src={user?.photoURL || USER_ICON}
							alt="userIcon"
							className="w-10 h-10 rounded-md"
						/>

						<button
							onClick={handleSignOut}
							className="text-white font-semibold"
						>
							Sign Out
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
