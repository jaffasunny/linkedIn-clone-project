import {
	CalendarViewDay,
	Create,
	EventNote,
	Image,
	Subscriptions,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import { db } from "./firebase";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Feed() {
	const user = useSelector(selectUser);
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => {
						return {
							id: doc.id,
							data: doc.data(),
						};
					})
				);
			});
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			name: user.displayName,
			description: user.email,
			message: input,
			photoUrl: user.photoUrl || "",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput("");
	};

	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<Create />
					<form>
						<input
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
							}}
							type="text"
							className="form__input"
						/>
						<button onClick={sendPost} type="submit">
							Send
						</button>
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
			<FlipMove>
				{posts.map(({ id, data: { name, description, message, photoUrl } }) => {
					return (
						<Post
							key={id}
							name={name}
							description={description}
							message={message}
							photoUrl={photoUrl}
						/>
					);
				})}
			</FlipMove>
		</div>
	);
}

export default Feed;
