import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import Share from "../../share/Share"
import Comments from "../../comments/Comments"
import "./postItem.scss"
import { useState } from "react"
import { Link } from "react-router-dom"

const PostItem = ({ post }) => {
	const [isLiked, setIsLiked] = useState(true)
	const [showComments, setShowComments] = useState(false)
	const [showShare, setShowShare] = useState(false)

	const toggleLike = () => setIsLiked((prev) => !prev)
	const toggleComments = () => setShowComments((prev) => !prev)
	const toggleShare = () => setShowShare((prev) => !prev)

	return (
		<article className="post">
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
					<span>
						32 <span className="post-action">Likes</span>
					</span>
				</div>
				<div className="div" onClick={toggleComments}>
					<ChatBubbleOutlineOutlinedIcon className="icon" />
					<span>
						11 <span className="post-action">Comments</span>
					</span>
				</div>
				<div className="div" onClick={toggleShare}>
					<ShareOutlinedIcon className="icon" />
					<span className="post-action">Share</span>
				</div>
			</div>
			{showComments && <Comments comments={post.comments} />}
			{showShare && <Share />}
		</article>
	)
}

export default PostItem
