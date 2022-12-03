import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import Share from "../../share/Share"
import "./post.scss"
import { useState } from "react"
import { Link } from "react-router-dom"

const Post = ({ post }) => {
	const [isLiked, setIsLiked] = useState(true)
	const [showComments, setShowComments] = useState(false)
	const [showShare, setShowShare] = useState(false)

	const toggleLike = () => setIsLiked((prev) => !prev)
	const toggleComments = () => setShowComments((prev) => !prev)
	const toggleShare = () => setShowShare((prev) => !prev)

	return (
		<div className="post">
			<div className="header">
				<div className="left">
					<img src={post.profilePic} alt="avatar" />
					<span>
						<Link to={`/profile/${post.userId}`} className="name">
							{post.name}
						</Link>
						<span className="last-seen">5 minutes ago</span>
					</span>
				</div>
				<div className="right">
					<MoreHorizIcon />
				</div>
			</div>
			<div className="body">
				<p>{post.desc}</p>
				<img src={post.img} alt="post" />
			</div>
			<div className="footer">
				<div className="div">
					{!isLiked && (
						<FavoriteBorderOutlinedIcon className="icon" onClick={toggleLike} />
					)}
					{isLiked && <FavoriteIcon className="like" onClick={toggleLike} />}
					<span>32 Likes</span>
				</div>
				<div className="div" onClick={toggleComments}>
					<ChatBubbleOutlineOutlinedIcon className="icon" />
					<span>11 Comments</span>
				</div>
				<div className="div" onClick={toggleShare}>
					<ShareOutlinedIcon className="icon" />
					<span>Share</span>
				</div>
			</div>
			{showComments && (
				<div className="comments">
					<div className="new-comment">
						<img
							src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="avatar"
						/>
						<form>
							<input type="text" placeholder="write a comment" />
							<button>Send</button>
						</form>
					</div>
					{post.comments.map((comment) => {
						return (
							<div className="comment">
								<img src={comment.img} alt="avatar" />
								<div>
									<span className="name">{comment.name}</span>
									<p className="comment-text">{comment.text}</p>
								</div>
								<span className="date">1 hour ago</span>
							</div>
						)
					})}
				</div>
			)}
			{showShare && <Share />}
		</div>
	)
}

export default Post
