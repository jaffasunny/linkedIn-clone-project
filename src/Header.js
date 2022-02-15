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

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
					alt=""
				/>

				<div className="header__search">
					<Search />
					<input type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOptions Icon={Home} title="Home" />
				<HeaderOptions Icon={SupervisorAccount} title="My Network" />
				<HeaderOptions Icon={BusinessCenter} title="My Network" />
				<HeaderOptions Icon={Chat} title="My Network" />
				<HeaderOptions Icon={Notifications} title="My Network" />
				<HeaderOptions
					avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
					title="me"
				/>
			</div>
		</div>
	);
}

export default Header;
