import {
	CalendarViewDay,
	Create,
	EventNote,
	Image,
	Subscriptions,
} from "@mui/icons-material";
import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";

function Feed() {
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<Create />
					<form>
						<input type="text" className="form__input" />
						<button type="submit">Send</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={Image} title="Photo" color="#70B5F9" />
					<InputOption Icon={Subscriptions} title="Video" color="#e7a33e" />
					<InputOption Icon={EventNote} title="Event" color="#c0cbcd" />
					<InputOption
						Icon={CalendarViewDay}
						title="Write Article"
						color="#7fc15e"
					/>
				</div>
			</div>
		</div>
	);
}

export default Feed;
