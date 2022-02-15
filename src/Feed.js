import { Create } from "@mui/icons-material";
import React from "react";
import "./Feed.css";

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
			</div>
		</div>
	);
}

export default Feed;
