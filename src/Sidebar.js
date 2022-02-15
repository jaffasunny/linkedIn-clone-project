import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
	const recentItem = (topic) => {
		return (
			<div className="sidebar__recentItem">
				<span className="sidebar__hash">#</span>
				<p>{topic}</p>
			</div>
		);
	};

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
					alt="background img"
				/>
				<Avatar className="sidebar__avatar" />
				<h2>Jaffer Sunny</h2>
				<h4>jaffer.sunny125@gmail.com</h4>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">2,534</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">2,534</p>
				</div>
			</div>

			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("softwareengineering")}
				{recentItem("design")}
				{recentItem("developer")}
			</div>
		</div>
	);
}

export default Sidebar;