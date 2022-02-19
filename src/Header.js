import React from "react";
import "./Header.css";
import {
	BusinessCenter,
	Chat,
	Home,
	Search,
	SupervisorAccount,
	Notifications,
} from "@mui/icons-material";
import HeaderOptions from "./HeaderOptions";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";

function Header() {
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
					alt=""
				/>

				<div className="header__search">
					<Search />
					<input placeholder="Search" type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOptions Icon={Home} title="Home" />
				<HeaderOptions Icon={SupervisorAccount} title="My Network" />
				<HeaderOptions Icon={BusinessCenter} title="My Network" />
				<HeaderOptions Icon={Chat} title="My Network" />
				<HeaderOptions Icon={Notifications} title="My Network" />
				<HeaderOptions avatar={true} title="me" onClick={logoutOfApp} />
			</div>
		</div>
	);
}

export default Header;
