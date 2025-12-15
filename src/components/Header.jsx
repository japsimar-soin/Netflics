import React from "react";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { NETFLICS_LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
	const user = useSelector((store) => store.user);
	const navigate = useNavigate();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
				console.error(error);
			});
	};

	return (
		<div className="absolute flex justify-between top-0 left-0 w-full px-16 py-10 z-20">
			<img className="w-48" src={NETFLICS_LOGO} alt="Netflics logo" />
			{user && (
				<div className="flex p-2">
					<img
						src={user?.photoURL || USER_ICON}
						alt="userIcon"
						className="w-12 h-12"
					/>
					<button onClick={handleSignOut} className="font-bold text-white">
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
