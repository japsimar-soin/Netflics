import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const AuthWatcher = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const { user, loading } = useSelector((s) => s.user);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
			if (firebaseUser) {
				dispatch(
					addUser({
						uid: firebaseUser.uid,
						email: firebaseUser.email,
						displayName: firebaseUser.displayName,
						photoURL: firebaseUser.photoURL,
					})
				);
			} else {
				dispatch(removeUser());
			}
		});

		return unsubscribe;
	}, [dispatch]);

	useEffect(() => {
		if (loading) return;

		if (!user && location.pathname === "/browse") {
			navigate("/", { replace: true });
		}

		if (user && location.pathname === "/") {
			navigate("/browse", { replace: true });
		}
	}, [user, loading, location.pathname, navigate]);

	if (loading) {
		return (
			<div className="h-screen flex items-center justify-center text-white">
				Loading...
			</div>
		);
	}

	return <Outlet />;
};

export default AuthWatcher;
