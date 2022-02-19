import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");

	const dispatch = useDispatch();

	const register = () => {
		if (!name) {
			return alert("Please enter a full name!");
		}
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoUrl: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						);
					});
			})
			.catch((err) => alert(err));
	};

	const loginToApp = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						profileUrl: userAuth.user.photoURL,
						displayName: userAuth.user.displayName,
					})
				);
			})
			.catch((err) => alert(err));
	};

	return (
		<div className="login">
			<img
				src="https://cdn2.downdetector.com/static/uploads/logo/LinkedIn.png"
				alt=""
			/>
			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Full name (required if registering) "
				/>
				<input
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					type="text"
					placeholder="Profile pic URL (optional)"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>

				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>

				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
			</form>

			<p>
				Not a member?{" "}
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
