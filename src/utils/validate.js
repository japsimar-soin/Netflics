export const validateSignInData = (email, password) => {
	if (!email || email.trim() === "") {
		return "Email is required";
	}
	if (!password || password.trim() === "") {
		return "Password is required";
	}

	const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
		email.trim()
	);
	if (!isEmailValid) {
		return "Please enter a valid email address";
	}

	if (password.length < 6) {
		return "Password must be at least 6 characters";
	}

	return null;
};
